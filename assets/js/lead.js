(function (global) {
  "use strict";

  var SUPERLEAP_ENDPOINT =
    "https://v1hooks.superleap.com/AbdSvZ/AbdSvZ_NFmEx2rPRY3BspJLTYLj";

  var UTM_STORAGE_KEY = "lead_utm_params";

  function readUTMsFromUrl() {
    if (typeof window === "undefined") return {};
    var params = new URLSearchParams(window.location.search);
    var get = function (key) {
      return params.get(key) || "";
    };
    return {
      utmSource: get("utm_source"),
      utmMedium: get("utm_medium"),
      utmCampaign: get("utm_campaign"),
      utmContent: get("utm_content"),
      utmTerm: get("utm_term"),
      utmAdgroupId: get("utm_adgroup_id") || get("utm_adgroupid"),
      utmCreativeId: get("utm_creative_id") || get("utm_creativeid"),
      utmDevice: get("utm_device"),
      utmNetwork: get("utm_network"),
      utmCampaignId: get("utm_campaign_id") || get("utm_campaignid"),
      utmMatchType: get("utm_match_type") || get("utm_matchtype"),
      utmKeyword: get("utm_keyword") || get("utm_term"),
      utmPlacement: get("utm_placement"),
      gclid: get("gclid"),
      fbclid: get("fbclid"),
    };
  }

  function hasAnyValue(obj) {
    for (var k in obj) {
      if (obj[k]) return true;
    }
    return false;
  }

  function getUTMParameters() {
    if (typeof window === "undefined") return {};
    var fromUrl = readUTMsFromUrl();
    var stored = {};
    try {
      var raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
      if (raw) stored = JSON.parse(raw) || {};
    } catch (_) {
      /* sessionStorage unavailable */
    }

    if (hasAnyValue(fromUrl)) {
      try {
        window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      } catch (_) {
        /* ignore */
      }
      return fromUrl;
    }
    return hasAnyValue(stored) ? stored : fromUrl;
  }

  // Capture UTMs on first load so they survive in-page navigation
  getUTMParameters();

  function detectBrowser(ua) {
    if (/Edg\//.test(ua)) {
      var m = ua.match(/Edg\/([\d.]+)/);
      return { browser: "Edge", version: m ? m[1] : "" };
    }
    if (/Chrome\//.test(ua)) {
      var m2 = ua.match(/Chrome\/([\d.]+)/);
      return { browser: "Chrome", version: m2 ? m2[1] : "" };
    }
    if (/Safari\//.test(ua) && !/Chrome/.test(ua)) {
      var m3 = ua.match(/Version\/([\d.]+)/);
      return { browser: "Safari", version: m3 ? m3[1] : "" };
    }
    if (/Firefox\//.test(ua)) {
      var m4 = ua.match(/Firefox\/([\d.]+)/);
      return { browser: "Firefox", version: m4 ? m4[1] : "" };
    }
    return { browser: "Unknown", version: "" };
  }

  function detectOS(ua) {
    if (/Windows/.test(ua)) return "Windows";
    if (/Mac OS X/.test(ua)) return "macOS";
    if (/Android/.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
    if (/Linux/.test(ua)) return "Linux";
    return "Unknown";
  }

  function detectDevice(ua) {
    if (/Mobi|Android.*Mobile|iPhone|iPod/.test(ua)) return "mobile";
    if (/iPad|Tablet|Android(?!.*Mobile)/.test(ua)) return "tablet";
    return "desktop";
  }

  function getBrowserInfo() {
    if (typeof window === "undefined") return {};
    var ua = navigator.userAgent;
    var b = detectBrowser(ua);
    return {
      browser: b.browser,
      version: b.version,
      os: detectOS(ua),
      platform: navigator.platform || "",
      device: detectDevice(ua),
    };
  }

  function submitToSuperleap(data) {
    return fetch(SUPERLEAP_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(function (err) {
      console.error("[LeadCapture] Superleap submission error:", err);
    });
  }

  function formToObject(form) {
    var obj = {};
    if (!form) return obj;
    var fd = new FormData(form);
    fd.forEach(function (value, key) {
      obj[key] = value;
    });
    return obj;
  }

  // Persist step-1 data so step-2 submit can include it without re-reading the form
  var leadState = {};

  function captureStep(step, form) {
    var fields = formToObject(form);

    if (step === 1) {
      leadState = Object.assign({}, fields);
    } else {
      leadState = Object.assign({}, leadState, fields);
    }

    var payload = Object.assign(
      leadState,
      {
        university: "jain",
        utmChannel: step === 1 ? "Apply Now - Step 1" : "Apply Now",
        submittedAt: new Date().toISOString(),
        utmURL: window.location.href,
      },
      getUTMParameters(),
      getBrowserInfo()
    );

    return submitToSuperleap(payload);
  }

  global.LeadCapture = {
    getUTMParameters: getUTMParameters,
    getBrowserInfo: getBrowserInfo,
    submitToSuperleap: submitToSuperleap,
    captureStep: captureStep,
  };
})(window);
