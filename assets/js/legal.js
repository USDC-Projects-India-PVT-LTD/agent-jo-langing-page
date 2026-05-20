(function () {
  "use strict";

  var TERMS_HTML = `
    <h4 class="text-base font-bold text-primary">1. About the Platform</h4>
    <p>Grow Rankings is an independent educational counselling and information platform. We provide counselling support and publicly available information regarding online degree programs offered by universities.</p>
    <p>We do not guarantee admissions, placements, scholarships, or university approvals.</p>

    <h4 class="text-base font-bold text-primary">2. Independent Platform Disclaimer</h4>
    <p>Grow Rankings is not the official website of Jain University or any other university unless explicitly stated.</p>
    <p>All university names, logos, trademarks, and brand references belong to their respective owners.</p>

    <h4 class="text-base font-bold text-primary">3. Information Accuracy</h4>
    <p>We aim to provide accurate and updated information based on publicly available sources. However:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>program details may change</li>
      <li>fee structures may change</li>
      <li>eligibility criteria may change</li>
      <li>admission deadlines may change</li>
    </ul>
    <p>Users are advised to verify final details directly with the respective university.</p>

    <h4 class="text-base font-bold text-primary">4. User Responsibilities</h4>
    <p>Users agree:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>to provide accurate information</li>
      <li>not to misuse the website</li>
      <li>not to submit false or misleading data</li>
    </ul>

    <h4 class="text-base font-bold text-primary">5. Counselling Support</h4>
    <p>Our platform may contact users regarding:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>admissions</li>
      <li>counselling support</li>
      <li>eligibility guidance</li>
      <li>educational opportunities</li>
    </ul>
    <p>Submission of enquiry forms indicates consent for communication.</p>

    <h4 class="text-base font-bold text-primary">6. Intellectual Property</h4>
    <p>All content, branding, design, and materials on this website belong to Grow Rankings or respective owners unless otherwise stated.</p>
    <p>Unauthorized copying or reproduction is prohibited.</p>

    <h4 class="text-base font-bold text-primary">7. Limitation of Liability</h4>
    <p>Grow Rankings shall not be held responsible for:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>admission decisions</li>
      <li>university policy changes</li>
      <li>career outcomes</li>
      <li>placement results</li>
      <li>technical interruptions</li>
    </ul>
    <p>Use of this website is at your own discretion.</p>

    <h4 class="text-base font-bold text-primary">8. Third-Party Services</h4>
    <p>This website may contain links or references to third-party websites and educational institutions. We are not responsible for third-party content, services, or policies.</p>

    <h4 class="text-base font-bold text-primary">9. Changes to Terms</h4>
    <p>We reserve the right to modify these Terms &amp; Conditions at any time without prior notice. Continued use of the website indicates acceptance of updated terms.</p>

    <h4 class="text-base font-bold text-primary">10. Contact Information</h4>
    <p>Contact: For any queries, write to <a href="mailto:admissions@jainonlinelearning.in" class="text-primary font-medium hover:underline break-all">admissions@jainonlinelearning.in</a></p>
    <p>Location: Bangalore, India</p>
  `;

  var ABOUT_HTML = `
    <h4 class="text-base font-bold text-primary">About Grow Rankings</h4>
    <p>Grow Rankings is an independent education counselling and information platform.</p>
    <p>We help students and working professionals explore online degree programs from various universities by providing transparent information, counselling support, and admission guidance.</p>
    <p>Our goal is to simplify the decision-making process through accurate program information and personalised counselling assistance.</p>

    <h4 class="text-base font-bold text-primary">What We Offer</h4>
    <ul class="list-disc pl-6 space-y-1">
      <li>Program Information</li>
      <li>Eligibility Guidance</li>
      <li>Counselling Support</li>
      <li>Admission Assistance</li>
      <li>Career-Oriented Program Exploration</li>
    </ul>

    <h4 class="text-base font-bold text-primary">Our Mission</h4>
    <p>To help students make informed education decisions through transparent and accessible guidance.</p>

    <h4 class="text-base font-bold text-primary">Important Disclaimer</h4>
    <p>Grow Rankings is not the official website of Jain University or any other university unless specifically stated.</p>
    <p>All trademarks, logos, and university names belong to their respective owners.</p>

    <h4 class="text-base font-bold text-primary">Contact</h4>
    <p>For any queries, write to <a href="mailto:admissions@jainonlinelearning.in" class="text-primary font-medium hover:underline break-all">admissions@jainonlinelearning.in</a></p>
    <p>Location: Bangalore, India</p>
  `;

  var CONTACT_HTML = `
    <p>Have questions about online degree programs, eligibility, fees, or admissions? Our counselling team is here to help you with complete guidance and support.</p>

    <h4 class="text-base font-bold text-primary">Contact Information</h4>
    <p>For any queries, write to <a href="mailto:admissions@jainonlinelearning.in" class="text-primary font-medium hover:underline break-all">admissions@jainonlinelearning.in</a></p>
    <p>Location: Bangalore, India</p>

    <h4 class="text-base font-bold text-primary">Support Hours</h4>
    <p>Monday – Saturday</p>
    <p>10:00 AM – 7:00 PM IST</p>

    <h4 class="text-base font-bold text-primary">Disclaimer</h4>
    <p>Grow Rankings is an independent counselling and information platform. We do not represent or claim official affiliation with any university unless specifically stated.</p>
  `;

  var PRIVACY_HTML = `
    <p>Welcome to Grow Rankings. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website and submit your details through enquiry forms.</p>

    <h4 class="text-base font-bold text-primary">1. Who We Are</h4>
    <p>Grow Rankings is an independent education counselling and information platform operated by Grow Rankings. We provide counselling support and publicly available information related to online degree programs offered by various universities.</p>
    <p>We do not represent or claim official affiliation with any university unless explicitly mentioned.</p>

    <h4 class="text-base font-bold text-primary">2. Information We Collect</h4>
    <p><strong>Data Controller:</strong> Grow Rankings acts as the data collection partner.</p>
    <p>When you use our website, we may collect:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>Full Name</li>
      <li>Phone Number</li>
      <li>Email Address</li>
      <li>City/Location</li>
      <li>Education Details</li>
      <li>Work Experience</li>
      <li>Course Preferences</li>
      <li>Any information submitted through enquiry forms</li>
    </ul>
    <p>We may also collect technical information such as:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>IP address</li>
      <li>Browser type</li>
      <li>Device information</li>
      <li>Website usage data through cookies and analytics tools</li>
    </ul>

    <h4 class="text-base font-bold text-primary">3. How We Use Your Information</h4>
    <p>We use your information to:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>Provide counselling assistance</li>
      <li>Share program-related information</li>
      <li>Contact you regarding admissions or eligibility</li>
      <li>Improve website experience</li>
      <li>Respond to your enquiries</li>
      <li>Send updates related to educational programs</li>
    </ul>
    <p>By submitting your information, you consent to being contacted via:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>Phone calls</li>
      <li>SMS</li>
      <li>WhatsApp</li>
      <li>Email</li>
    </ul>

    <h4 class="text-base font-bold text-primary">4. Information Sharing</h4>
    <p>We may share your information with:</p>
    <ul class="list-disc pl-6 space-y-1">
      <li>Counselling representatives</li>
      <li>University admission teams</li>
      <li>Service providers assisting with lead management or communication</li>
    </ul>
    <p>We do not sell personal information to third parties.</p>

    <h4 class="text-base font-bold text-primary">5. Cookies &amp; Tracking Technologies</h4>
    <p>Our website may use cookies and analytics tools to improve user experience and monitor website performance.</p>
    <p>You may disable cookies through your browser settings.</p>

    <h4 class="text-base font-bold text-primary">6. Third-Party Links</h4>
    <p>Our website may contain links to third-party websites or university websites. We are not responsible for the privacy practices or content of external websites.</p>

    <h4 class="text-base font-bold text-primary">7. Data Security</h4>
    <p>We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.</p>
    <p>However, no online platform can guarantee complete security.</p>

    <h4 class="text-base font-bold text-primary">8. User Consent</h4>
    <p>By using this website and submitting your information, you agree to this Privacy Policy and consent to the collection and usage of your information as described.</p>

    <h4 class="text-base font-bold text-primary">9. Disclaimer</h4>
    <p>Grow Rankings is an independent counselling and information platform operated by Grow Rankings. We do not represent or claim official affiliation with Jain University or any other university unless specifically stated.</p>
    <p>All trademarks, logos, and brand names belong to their respective owners.</p>

    <h4 class="text-base font-bold text-primary">10. Contact Information</h4>
    <p>If you have questions regarding this Privacy Policy, you may contact us:</p>
    <p>Contact: For any queries, write to <a href="mailto:admissions@jainonlinelearning.in" class="text-primary font-medium hover:underline break-all">admissions@jainonlinelearning.in</a></p>
    <p>Location: Bangalore, India</p>
  `;

  function buildModal(id, title, subtitle, bodyHTML) {
    return (
      '<div id="' + id + '" class="fixed inset-0 z-[100] hidden">' +
        '<div class="' + id + '-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"></div>' +
        '<div class="relative h-full flex items-center justify-center p-4">' +
          '<div class="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl max-h-[90vh] flex flex-col">' +
            '<div class="flex items-start justify-between gap-4 p-6 lg:p-8 border-b border-gray-100">' +
              '<div>' +
                '<h3 class="text-xl lg:text-2xl font-bold font-heading text-primary">' + title + '</h3>' +
                '<p class="text-gray-500 text-xs mt-1">' + subtitle + '</p>' +
              '</div>' +
              '<button type="button" data-legal-close ' +
                'class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all cursor-pointer" ' +
                'aria-label="Close">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">' +
                  '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' +
                '</svg>' +
              '</button>' +
            '</div>' +
            '<div class="p-6 lg:p-8 overflow-y-auto text-sm text-gray-700 leading-relaxed space-y-3">' +
              bodyHTML +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  var MODALS = [
    { hash: '#terms',   id: 'termsModal',   title: 'Terms &amp; Conditions', subtitle: 'Last Updated: April 2026', body: TERMS_HTML },
    { hash: '#privacy', id: 'privacyModal', title: 'Privacy Policy',         subtitle: 'Last Updated: April 2026', body: PRIVACY_HTML },
    { hash: '#about',   id: 'aboutModal',   title: 'About Us',               subtitle: 'Grow Rankings',            body: ABOUT_HTML },
    { hash: '#contact', id: 'contactModal', title: 'Contact Us',             subtitle: 'We are here to help',      body: CONTACT_HTML },
  ];

  function init() {
    var container = document.createElement('div');
    container.innerHTML = MODALS.map(function (m) {
      return buildModal(m.id, m.title, m.subtitle, m.body);
    }).join('');
    while (container.firstChild) {
      document.body.appendChild(container.firstChild);
    }

    var elements = MODALS.map(function (m) {
      return Object.assign({}, m, { el: document.getElementById(m.id) });
    });

    function allHidden() {
      return elements.every(function (m) { return m.el.classList.contains('hidden'); });
    }
    function open(modal) {
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    function close(modal) {
      modal.classList.add('hidden');
      if (allHidden()) document.body.style.overflow = '';
    }

    elements.forEach(function (m) {
      document.querySelectorAll('a[href="' + m.hash + '"]').forEach(function (a) {
        a.addEventListener('click', function (e) { e.preventDefault(); open(m.el); });
      });
      m.el.querySelector('[data-legal-close]').addEventListener('click', function () { close(m.el); });
      m.el.querySelector('.' + m.id + '-backdrop').addEventListener('click', function () { close(m.el); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      elements.forEach(function (m) {
        if (!m.el.classList.contains('hidden')) close(m.el);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
