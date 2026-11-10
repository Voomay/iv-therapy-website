const services=[
 ['Primary Healthcare','Preventive care and consultations for acute and chronic conditions across all ages.'],
 ['IV Therapy','Direct infusion of essential vitamins and nutrients for hydration, energy and wellness.'],
 ['Family Medicine Specialist','Comprehensive, patient-centred medical care and prescriptions for every stage of life.'],
 ['Medical Checkup','Comprehensive medical check-ups and preventative screenings to prioritise your health.'],
 ['Wound Care','Experienced wound management ensuring optimal healing and preventing complications.'],
 ['Blood Tests','Diagnostic and monitoring blood tests for a wide range of medical conditions.'],
 ['Palliative Care','Compassionate support to enhance quality of life for serious illnesses.'],
 ['Aesthetic Treatments','Safe, effective treatments to restore confidence and promote healthy, radiant skin.']
];
const serviceIcons=["stethoscope","syringe","users","heart-pulse","bandage","syringe","hands","heart"];
const serviceGrid=document.querySelector('#service-grid');
const MOBILE_HIDDEN_FROM=6;
if(serviceGrid) serviceGrid.innerHTML=services.map(([name,description],i)=>`<button class="service-card${i>=MOBILE_HIDDEN_FROM?' hidden-mobile':''}" data-service="${i}" aria-label="Learn about ${name}"><div class="service-photo-wrap"><img class="service-photo" src="assets/service-${i}.jpg" alt="${name}" width="640" height="360" loading="lazy"></div><div class="service-card-body"><div class="card-title"><span class="service-icon"><svg aria-hidden="true"><use href="#${serviceIcons[i]}"/></svg></span><h3>${name}</h3></div><p>${description}</p></div></button>`).join('');
// Mobile "View More" button for services
(function(){
 const btn=document.getElementById('service-view-more-btn');
 if(!btn) return;
 btn.addEventListener('click',function(){
  const hidden=serviceGrid?serviceGrid.querySelectorAll('.service-card.hidden-mobile'):[];
  hidden.forEach(function(card){card.classList.add('revealed');});
  const wrap=document.getElementById('service-grid-wrap');
  if(wrap) wrap.classList.remove('collapsed');
  btn.closest('.service-view-more-wrap').style.display='none';
 });
})();

const blogArticles={
 'iv-therapy-guide':{
  category:'IV Therapy & Wellness',
  title:'How Medical IV Vitamin & Hydration Therapy Supports Immunity, Energy & Recovery',
  author:'Dr. Michael Le Roux · Family Medicine Specialist',
  readTime:'5 min read',
  image:'assets/blog-iv-therapy.jpg',
  body:`
   <p>Medical intravenous (IV) therapy delivers fluids, electrolytes, vitamins, and antioxidants directly into the bloodstream for 100% bioavailability—bypassing digestive absorption limits when your body needs rapid replenishment.</p>
   <h3>Who Benefits Most from Clinical IV Therapy?</h3>
   <ul class="dialog-list">
    <li><strong>Dehydration &amp; Acute Recovery:</strong> Rapid fluid and electrolyte restoration after stomach bugs, heat exhaustion, or viral illness.</li>
    <li><strong>Immune System Support:</strong> High-dose Vitamin C, Zinc, and B-complex infusions during winter cold and flu season.</li>
    <li><strong>Fatigue, Burnout &amp; Migraines:</strong> Magnesium, B12, and amino acid support for persistent tiredness and tension.</li>
    <li><strong>Athletic &amp; Muscle Recovery:</strong> Targeted rehydration for runners, cyclists, and active individuals in Kuils River and surrounds.</li>
   </ul>
   <h3>Safe, Doctor-Led Care</h3>
   <p>At our Kuils River practice, every IV drip is prescribed after a brief clinical check by one of our three doctors and administered gently in our treatment suite.</p>
  `
 },
 'child-winter-immunity':{
  category:'Family & Child Health',
  title:'Protecting Your Child Through Flu Season: Milestones, Vaccines & When to See a GP',
  author:'Dr. Danielle Strydom · General Practitioner',
  readTime:'4 min read',
  image:'assets/blog-child-immunity.jpg',
  body:`
   <p>Young children in crèche and primary school frequently encounter seasonal respiratory viruses. Knowing how to support their immunity—and when a fever needs medical evaluation—brings peace of mind to every parent.</p>
   <h3>Key Signs to Book a Paediatric Consultation</h3>
   <ul class="dialog-list">
    <li>A fever lasting longer than 48–72 hours, or any fever in an infant under 3 months old.</li>
    <li>Fast or laboured breathing, persistent ear pain, or a barking cough.</li>
    <li>Reduced fluid intake, dry nappies, or unusual drowsiness.</li>
   </ul>
   <h3>Routine Immunisations &amp; Growth Checks</h3>
   <p>We track your child's growth charts, developmental milestones, and EPI / private vaccination schedule in a calm, child-friendly setting.</p>
  `
 },
 'hypertension-diabetes-care':{
  category:'Chronic Care',
  title:'Living Well with High Blood Pressure & Diabetes: Why Regular Monitoring Matters',
  author:'Dr. Michael Le Roux · Family Medicine Specialist',
  readTime:'6 min read',
  image:'assets/blog-chronic-care.jpg',
  body:`
   <p>Hypertension and Type 2 diabetes are often called "silent conditions" because they can progress for years without obvious symptoms. Consistent primary care monitoring protects your heart, kidneys, eyes, and long-term vitality.</p>
   <h3>Our Structured Chronic Care Programme</h3>
   <ul class="dialog-list">
    <li><strong>Quarterly Vitals &amp; HbA1c Reviews:</strong> Pre-consultation blood pressure, glucose, and ECG checks.</li>
    <li><strong>Personalised Medication &amp; Lifestyle Plans:</strong> Practical nutrition, movement, and medication adjustments that fit your routine.</li>
    <li><strong>Medical Aid Chronic Authorisations:</strong> Our practice manager Jenna-lee Le Roux assists with PMB and chronic script registrations.</li>
   </ul>
  `
 },
 'womens-preventative-screenings':{
  category:'Preventative Health',
  title:"Essential Preventative Health Screenings Every Woman Should Schedule Annually",
  author:'Dr. Danielle Strydom · General Practitioner',
  readTime:'5 min read',
  image:'assets/blog-womens-health.jpg',
  body:`
   <p>Preventative healthcare empowers women at every stage of life—from young adulthood and family planning through pregnancy, motherhood, and menopause.</p>
   <h3>Recommended Annual &amp; Milestone Checks</h3>
   <ul class="dialog-list">
    <li><strong>Cervical &amp; Breast Health:</strong> Routine Pap smears, HPV screening, and clinical breast examinations.</li>
    <li><strong>Iron, Thyroid &amp; Vitamin D Profiles:</strong> Identifying common causes of fatigue, hair thinning, or mood changes early.</li>
    <li><strong>Contraception &amp; Hormonal Balance:</strong> Unhurried, confidential guidance tailored to your health goals.</li>
   </ul>
  `
 },
 'mens-health-longevity':{
  category:'Preventative Health',
  title:"Men's Health Check-Ups After 35: Heart Health, Stress, Prostate & Vitality",
  author:'Dr. Rhiyaan Smith · General Practitioner',
  readTime:'4 min read',
  image:'assets/blog-mens-health.jpg',
  body:`
   <p>Many men wait until a symptom becomes severe before visiting a doctor. A proactive 30-minute annual wellness check can detect cardiovascular, metabolic, and hormonal risks years before complications arise.</p>
   <h3>What We Cover in a Men's Wellness Consultation</h3>
   <ul class="dialog-list">
    <li><strong>Cardiovascular Risk Profile:</strong> Blood pressure, cholesterol lipogram, blood glucose, and resting ECG.</li>
    <li><strong>Prostate &amp; Hormonal Screening:</strong> PSA blood testing (from age 40–45 or earlier with family history) and testosterone evaluation.</li>
    <li><strong>Stress, Sleep &amp; Recovery:</strong> Practical strategies and targeted IV nutrient support for demanding work schedules.</li>
   </ul>
  `
 },
 'minor-procedures-travel':{
  category:'Patient Guides',
  title:'In-Clinic Minor Procedures & Pre-Travel Medical Preparation: What to Expect',
  author:'Dr. Rhiyaan Smith · General Practitioner',
  readTime:'4 min read',
  image:'assets/blog-minor-procedures.jpg',
  body:`
   <p>Many minor surgical procedures, wound dressings, and travel vaccinations can be completed safely right here at our Kuils River family practice—saving you a hospital visit.</p>
   <h3>Safe In-Clinic Minor Procedures</h3>
   <ul class="dialog-list">
    <li>Skin lesion, mole, and cyst removals under local anaesthetic.</li>
    <li>Suturing of lacerations, wound care, and cryotherapy for warts or sun spots.</li>
    <li>Pre-travel health consultations, malaria prophylaxis scripts, and travel immunisations.</li>
   </ul>
  `
 }
};

const dialog=document.querySelector('#details'),content=document.querySelector('#dialog-content');
const call='<a class="button outline" href="tel:+27219000970"><svg><use href="#phone"/></svg>021 900 0970</a>';
const email='<a class="button outline" href="mailto:reception@drmichaelleroux.co.za?subject=Appointment%20enquiry">Email the practice</a>';

function escapeHtml(str){
 return String(str||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function getTomorrowISO(){
 const d=new Date();
 d.setDate(d.getDate()+1);
 if(d.getDay()===0) d.setDate(d.getDate()+1);
 return d.toISOString().split('T')[0];
}

const info={
 about:['A personal approach to better healthcare.',"Dr. Michael Le Roux, Dr. Danielle Strydom, and Dr. Rhiyaan Smith lead our Kuils River family practice with a passion for providing accessible, holistic healthcare for individuals and families in our community, supported by our team of 5 dedicated practice staff."],
 patient:['Health & Care Blog','Explore our Health & Care Blog for doctor-written articles on IV vitamin therapy, child immunity, chronic disease care, and preventative health screenings.'],
 services:['Comprehensive medical care',`<ul class="dialog-list">${services.map(([n,d])=>`<li><strong>${n}</strong> — ${d}</li>`).join('')}</ul>`],
 reviews:['Patient reviews','Our practice is proud to care for individuals and families across Kuils River and surrounding areas with attentive, unhurried medical consultations.'],
 social:['Stay connected','Follow our practice on Facebook, Instagram, or TikTok, or use Doc Assist anytime for quick FAQ answers and WhatsApp appointment enquiries on 073 579 1601.'],
 privacy:['Privacy Policy','Patient information entered into our appointment request forms is used solely to coordinate your consultation with our doctors and reception team in accordance with POPIA.'],
 terms:['Terms & Conditions','Submitting an appointment request notifies our reception staff of your preferred doctor and date. Our staff will contact you to confirm exact available time slots.']
};

let lastFocus;
function show(title,body,actions=true){
 lastFocus=document.activeElement;
 content.innerHTML=`<p class="dialog-label">Dr. Michael Le Roux · Family Medicine Specialist</p><h2 id="dialog-title">${title}</h2>${body.startsWith('<')?body:`<p>${body}</p>`}${actions?`<div class="dialog-actions"><button class="button" data-book><svg><use href="#calendar"/></svg>Book an Appointment</button>${call}</div>`:''}`;
 dialog.setAttribute('aria-labelledby','dialog-title');
 if(!dialog.open) dialog.showModal();
}

function openBookingModal(preselectedDoctor='',preselectedService=''){
 lastFocus=document.activeElement;
 const tomorrow=getTomorrowISO();
 const doctors=[
  'Dr. Michael Le Roux',
  'Dr. Danielle Strydom',
  'Dr. Rhiyaan Smith',
  'Any Doctor (First Available Slot)'
 ];
 const serviceOptions=[
  'Primary Healthcare',
  'IV Therapy',
  'Family Medicine Specialist',
  'Medical Checkup',
  'Wound Care',
  'Blood Tests',
  'Palliative Care',
  'Aesthetic Treatments',
  'Home Visits',
  'Sonography Services',
  'Mental Health Services',
  'Small Medical Services'
 ];
 content.innerHTML=`
  <p class="dialog-label">APPOINTMENT BOOKING REQUEST</p>
  <h2 id="dialog-title">Book an Appointment</h2>
  <div class="slot-notice-banner">
   <svg aria-hidden="true"><use href="#calendar"/></svg>
   <span>Choose which of our <strong>3 doctors</strong> you would like to see and when you want your appointment. <strong>Our staff will reach out to you with available time slots (e.g. Slot X, Y, and Z)</strong> to confirm your booking.</span>
  </div>
  <form id="popup-booking-form" class="booking-popup-form">
   <div class="form-row">
    <label>
     <span>Your Full Name *</span>
     <input type="text" name="name" placeholder="e.g. Sarah Meyer" required>
    </label>
    <label>
     <span>Phone / WhatsApp Number *</span>
     <input type="tel" name="phone" placeholder="e.g. 082 123 4567" required>
    </label>
   </div>
   <div class="form-row">
    <label>
     <span>Which Doctor Would You Like to Book For? *</span>
     <select name="doctor" required>
      ${doctors.map(d=>`<option value="${escapeHtml(d)}" ${preselectedDoctor&&d.toLowerCase().includes(preselectedDoctor.toLowerCase())?'selected':''}>${escapeHtml(d)}</option>`).join('')}
     </select>
    </label>
    <label>
     <span>Service / Consultation Type *</span>
     <select name="service" required>
      ${serviceOptions.map(s=>`<option value="${escapeHtml(s)}" ${preselectedService&&s.toLowerCase().includes(preselectedService.toLowerCase())?'selected':''}>${escapeHtml(s)}</option>`).join('')}
     </select>
    </label>
   </div>
   <div class="form-row">
    <label>
     <span>When Do You Want Your Appointment? *</span>
     <input type="date" name="date" value="${tomorrow}" min="${new Date().toISOString().split('T')[0]}" required>
    </label>
    <label>
     <span>Preferred Time Window *</span>
     <select name="time_window" required>
      <option value="Morning (08:00 – 11:30)">Morning (08:00 – 11:30)</option>
      <option value="Midday (11:30 – 14:00)">Midday (11:30 – 14:00)</option>
      <option value="Afternoon (14:00 – 17:00)">Afternoon (14:00 – 17:00)</option>
      <option value="Saturday Morning (08:30 – 13:00)">Saturday Morning (08:30 – 13:00)</option>
      <option value="Flexible — Show me any available slots">Flexible — Any Available Slot</option>
     </select>
    </label>
   </div>
   <label>
    <span>Email Address (Optional)</span>
    <input type="email" name="email" placeholder="you@example.com">
   </label>
   <label>
    <span>Notes or Symptoms (Optional)</span>
    <textarea name="message" rows="2" placeholder="Any specific time preferences, symptoms, or questions for our staff..."></textarea>
   </label>
   <div class="dialog-actions">
    <button type="submit" class="button"><svg aria-hidden="true"><use href="#calendar"/></svg>Request Available Slots <svg aria-hidden="true"><use href="#arrow"/></svg></button>
    <button type="button" class="button outline" data-whatsapp-ai><svg aria-hidden="true"><use href="#whatsapp"/></svg>Ask Doc Assist</button>
   </div>
  </form>
 `;
 dialog.setAttribute('aria-labelledby','dialog-title');
 if(!dialog.open) dialog.showModal();

 const popupForm=document.querySelector('#popup-booking-form');
 popupForm.addEventListener('submit',e=>{
  e.preventDefault();
  handleBookingSubmission(new FormData(popupForm));
 });
}

function handleBookingSubmission(fd){
 const name=escapeHtml(fd.get('name')||'Patient');
 const phone=escapeHtml(fd.get('phone')||'');
 const doctor=escapeHtml(fd.get('doctor')||'Dr. Michael Le Roux');
 const service=escapeHtml(fd.get('service')||'General Consultation');
 const date=escapeHtml(fd.get('date')||'Upcoming available day');
 const timeWindow=escapeHtml(fd.get('time_window')||'Flexible');

 const rawText=`Hi Dr. Michael Le Roux Practice, I would like to book an appointment.\n\n• Name: ${fd.get('name')}\n• Phone: ${fd.get('phone')}\n• Preferred Doctor: ${fd.get('doctor')||'Dr. Michael Le Roux'}\n• Service: ${fd.get('service')}\n• Preferred Date: ${fd.get('date')||'Flexible'}\n• Preferred Time: ${fd.get('time_window')||'Flexible'}\n• Notes: ${fd.get('message')||'None'}\n\nPlease let me know what available slots you have.`;
 const waUrl=`https://wa.me/27735791601?text=${encodeURIComponent(rawText)}`;
 const mailSubject=encodeURIComponent(`Appointment Slot Request: ${fd.get('doctor')||'Doctor'} — ${fd.get('name')}`);
 const mailBody=encodeURIComponent(rawText);

 show('Appointment Request Ready',`
  <p>Thank you, <strong>${name}</strong>! Your appointment request has been prepared.</p>
  <div class="booking-summary-box">
   <p><strong>Preferred Doctor:</strong> ${doctor}</p>
   <p><strong>Service:</strong> ${service}</p>
   <p><strong>Requested Date &amp; Time:</strong> ${date} · ${timeWindow}</p>
   <p><strong>Contact Number:</strong> ${phone}</p>
  </div>
  <p><strong>What happens next:</strong> Our receptionist (Megan Balters) will check the schedule for <strong>${doctor}</strong> and reach out to you on <strong>${phone}</strong> to say: <em>"We have available slots at X, Y, and Z"</em> so you can confirm the best time for your visit.</p>
  <div class="dialog-actions">
   <a class="button whatsapp-btn-solid" href="${waUrl}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#whatsapp"/></svg>Send Request via WhatsApp</a>
   <a class="button" href="mailto:reception@drmichaelleroux.co.za?subject=${mailSubject}&body=${mailBody}"><svg aria-hidden="true"><use href="#mail"/></svg>Send via Email</a>
   ${call}
  </div>
 `,false);
}

/* ==========================================================================
   DOC ASSIST — Interactive FAQ Pop-up Widget with Sound & WhatsApp Chat
   ========================================================================== */

let audioCtx=null;
let docAssistSoundEnabled=localStorage.getItem('docAssistMuted')!=='true';
let pendingWelcomeChime=false;

function playDocAssistSound(type='popup'){
 if(!docAssistSoundEnabled) return;
 try{
  const Ctx=window.AudioContext||window.webkitAudioContext;
  if(!Ctx) return;
  if(!audioCtx) audioCtx=new Ctx();
  if(audioCtx.state==='suspended'){
   audioCtx.resume().then(()=>{
    triggerSynthTone(type);
   }).catch(()=>{
    pendingWelcomeChime=true;
   });
   return;
  }
  triggerSynthTone(type);
 }catch(err){
  /* Ignore audio errors if blocked by browser settings */
 }
}

function triggerSynthTone(type){
 if(!audioCtx||audioCtx.state!=='running') return;
 const now=audioCtx.currentTime;
 if(type==='popup'){
  /* Friendly 2-note ascending medical chime (D5 -> A5) */
  const notes=[587.33,880.0];
  notes.forEach((freq,idx)=>{
   const osc=audioCtx.createOscillator();
   const gain=audioCtx.createGain();
   osc.type='sine';
   osc.frequency.setValueAtTime(freq,now+idx*0.11);
   gain.gain.setValueAtTime(0.0001,now+idx*0.11);
   gain.gain.exponentialRampToValueAtTime(0.11,now+idx*0.11+0.025);
   gain.gain.exponentialRampToValueAtTime(0.0001,now+idx*0.11+0.34);
   osc.connect(gain);
   gain.connect(audioCtx.destination);
   osc.start(now+idx*0.11);
   osc.stop(now+idx*0.11+0.36);
  });
 }else if(type==='reply'){
  /* Soft WhatsApp-style incoming message pop (E5 -> G5) */
  const osc=audioCtx.createOscillator();
  const gain=audioCtx.createGain();
  osc.type='triangle';
  osc.frequency.setValueAtTime(659.25,now);
  osc.frequency.exponentialRampToValueAtTime(783.99,now+0.08);
  gain.gain.setValueAtTime(0.0001,now);
  gain.gain.exponentialRampToValueAtTime(0.09,now+0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001,now+0.22);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now+0.24);
 }else if(type==='click'){
  /* Subtle crisp tap sound */
  const osc=audioCtx.createOscillator();
  const gain=audioCtx.createGain();
  osc.type='sine';
  osc.frequency.setValueAtTime(480,now);
  gain.gain.setValueAtTime(0.05,now);
  gain.gain.exponentialRampToValueAtTime(0.0001,now+0.045);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now+0.05);
 }
}

/* Unlock audio on first user gesture if auto-popup chime was deferred */
['pointerdown','keydown'].forEach(evt=>{
 window.addEventListener(evt,()=>{
  if(pendingWelcomeChime&&docAssistSoundEnabled){
   pendingWelcomeChime=false;
   playDocAssistSound('popup');
  }
 },{once:true,passive:true});
});

const docAssistFaqs=[
 {
  id:'book-slots',
  label:'📅 How do I book an appointment?',
  question:'How do I book an appointment & check available slots?',
  answer:`You can book online in 30 seconds! Choose your preferred doctor (<strong>Dr. Michael Le Roux</strong>, <strong>Dr. Danielle Strydom</strong>, or <strong>Dr. Rhiyaan Smith</strong>) and date. Our receptionist <strong>Megan Balters</strong> will contact you with available time slots (Slot X, Y &amp; Z) to confirm.<div class="da-bubble-actions"><button type="button" class="da-inline-btn" data-book><svg aria-hidden="true"><use href="#calendar"/></svg>Open Booking Form</button></div>`
 },
 {
  id:'iv-drips',
  label:'💧 What IV Therapy drips do you offer?',
  question:'What IV Vitamin & Hydration Therapy drips do you offer?',
  answer:`We offer doctor-prescribed IV vitamin &amp; hydration infusions (30–45 mins):<br>• <strong>Immune Boost &amp; Flu Defense</strong> (Vit C + Zinc)<br>• <strong>Myers' Wellness &amp; Fatigue</strong><br>• <strong>Electrolyte Rehydration</strong><br>• <strong>Athletic &amp; Muscle Recovery</strong><br>• <strong>Skin Radiance &amp; Glutathione</strong><br>• <strong>Migraine &amp; Stress Relief</strong><div class="da-bubble-actions"><button type="button" class="da-inline-btn" data-book data-book-service="IV Vitamin & Hydration Therapy"><svg aria-hidden="true"><use href="#calendar"/></svg>Book an IV Drip</button></div>`
 },
 {
  id:'doctors-team',
  label:'👨‍⚕️ Who are your 3 doctors & staff?',
  question:'Tell me about the 3 doctors and 5 practice staff members.',
  answer:`Our Kuils River practice is led by <strong>3 experienced doctors</strong>:<br>• <strong>Dr. Michael Le Roux</strong> (Family Medicine Specialist)<br>• <strong>Dr. Danielle Strydom</strong> (General Practitioner)<br>• <strong>Dr. Rhiyaan Smith</strong> (General Practitioner)<br>Supported by <strong>5 dedicated staff</strong>: Jenna-lee Le Roux, Everline Nanyama, Megan Balters, Marion Khakasa &amp; Rochelle Pietersen.`
 },
 {
  id:'medical-aid',
  label:'💳 Do you accept Medical Aid?',
  question:'Do you accept Medical Aid and private patients?',
  answer:`<strong>Yes!</strong> We welcome both <strong>Medical Aid members</strong> (most major SA schemes) and <strong>private patients</strong>. Our practice manager <strong>Jenna-lee Le Roux</strong> helps with direct medical aid claims, chronic PMB authorisations, and clear private tariffs.`
 },
 {
  id:'hours-location',
  label:'🕒 Opening hours & location?',
  question:'What are your opening hours and where are you located?',
  answer:`📍 <strong>Address:</strong> 21 Langverwacht Road, Klipdam, Kuils River, 7580 (free on-site parking).<br>🕒 <strong>Hours:</strong><br>• Mon – Fri: 08:30 – 18:00<br>• Saturday: 08:30 – 13:00<br>• Sun &amp; Public Holidays: Closed`
 },
 {
  id:'child-family',
  label:'👶 Child health & family bookings?',
  question:'Can I book for my child or our whole family together?',
  answer:`<strong>Absolutely!</strong> We provide gentle paediatric check-ups, baby growth tracking, and vaccinations for children of all ages. Mention in your notes if you'd like back-to-back family slots!`
 }
];

function getDocAssistCustomAnswer(question){
 const q=question.toLowerCase();
 if(q.includes('slot')||q.includes('book')||q.includes('appoint')||q.includes('when')) return docAssistFaqs[0].answer;
 if(q.includes('iv')||q.includes('drip')||q.includes('vitamin')||q.includes('hydrat')) return docAssistFaqs[1].answer;
 if(q.includes('doctor')||q.includes('michael')||q.includes('mandy')||q.includes('abels')||q.includes('rhiyaan')||q.includes('smith')||q.includes('danielle')||q.includes('strydom')||q.includes('team')||q.includes('staff')) return docAssistFaqs[2].answer;
 if(q.includes('aid')||q.includes('price')||q.includes('cost')||q.includes('pay')||q.includes('tariff')||q.includes('claim')) return docAssistFaqs[3].answer;
 if(q.includes('hour')||q.includes('open')||q.includes('where')||q.includes('locat')||q.includes('address')) return docAssistFaqs[4].answer;
 if(q.includes('child')||q.includes('baby')||q.includes('kid')||q.includes('vaccin')||q.includes('paed')) return docAssistFaqs[5].answer;
 return `Thank you for your question! I can help you book a slot with <strong>Dr. Michael Le Roux</strong>, <strong>Dr. Danielle Strydom</strong>, or <strong>Dr. Rhiyaan Smith</strong>, or you can click <strong>"Chat via WhatsApp"</strong> below to message our reception team directly!`;
}

function initDocAssistWidget(){
 /* Ensure floating WhatsApp button exists and is a direct child of body so it is always visible */
 let floatBtn=document.querySelector('.floating-whatsapp-ai');
 if(!floatBtn){
  floatBtn=document.createElement('button');
  floatBtn.className='floating-whatsapp-ai';
  floatBtn.setAttribute('data-whatsapp-ai','');
 }
 if(floatBtn.parentElement!==document.body){
  document.body.appendChild(floatBtn);
 }
 floatBtn.setAttribute('aria-label','Chat on WhatsApp & Open Doc Assist FAQs');
 floatBtn.innerHTML=`
  <span class="da-float-pulse" aria-hidden="true"></span>
  <svg aria-hidden="true"><use href="#whatsapp"/></svg>
  <span class="da-float-text">
   <strong>WhatsApp</strong>
   <small>Chat &amp; FAQs</small>
  </span>
  <span class="da-float-badge" id="da-unread-badge">1</span>
 `;

 /* Put menu-toggle inside header-actions on the right for a clean mobile header */
 const headerActions=document.querySelector('.header-actions');
 const menuToggle=document.querySelector('.menu-toggle');
 if(headerActions&&menuToggle){
  headerActions.appendChild(menuToggle);
 }

 /* Create the Doc Assist Pop-up Widget */
 const popup=document.createElement('aside');
 popup.id='doc-assist-popup';
 popup.className='doc-assist-popup';
 popup.setAttribute('aria-label','Doc Assist FAQ & WhatsApp Assistant');
 popup.setAttribute('aria-hidden','true');
 popup.innerHTML=`
  <div class="da-header">
   <div class="da-header-brand">
    <div class="da-avatar">
     <svg aria-hidden="true"><use href="#stethoscope"/></svg>
     <span class="da-status-dot" aria-hidden="true"></span>
    </div>
    <div>
     <div class="da-title-row">
      <strong>Doc Assist</strong>
      <span class="da-verified-pill">Practice Assistant</span>
     </div>
     <small>Click a question below or chat via WhatsApp</small>
    </div>
   </div>
   <div class="da-header-controls">
    <button type="button" class="da-icon-btn" id="da-sound-toggle" aria-label="${docAssistSoundEnabled?'Mute sound':'Enable sound'}" title="${docAssistSoundEnabled?'Sound On (click to mute)':'Sound Muted (click to unmute)'}">
     <span id="da-sound-icon">${docAssistSoundEnabled?'🔊':'🔇'}</span>
    </button>
    <button type="button" class="da-icon-btn" id="da-close-btn" aria-label="Close Doc Assist">
     <svg aria-hidden="true"><use href="#close"/></svg>
    </button>
   </div>
  </div>

  <div class="da-body" id="da-messages">
   <div class="da-bubble bot">
    👋 Hi there! Welcome to <strong>Dr. Michael Le Roux</strong>.<br>
    I'm <strong>Doc Assist</strong> — tap any <strong>Frequently Asked Question</strong> below for an instant answer, or click <strong>Chat via WhatsApp</strong>!
   </div>
   <div class="da-faq-panel">
    <p class="da-faq-heading">Frequently Asked Questions (Tap to view answer)</p>
    <div class="da-faq-list" id="da-faq-list">
     ${docAssistFaqs.map(f=>`<button type="button" class="da-faq-btn" data-faq-id="${f.id}"><span>${f.label}</span><svg aria-hidden="true"><use href="#arrow"/></svg></button>`).join('')}
    </div>
   </div>
  </div>

  <form class="da-input-bar" id="da-custom-form">
   <input type="text" id="da-custom-input" placeholder="Or type a question for Doc Assist..." aria-label="Ask Doc Assist a question">
   <button type="submit" class="da-send-btn" aria-label="Ask">Ask</button>
  </form>

  <div class="da-footer-actions">
   <a class="da-whatsapp-cta" id="da-whatsapp-link" href="https://wa.me/27735791601?text=Hi%20Dr.%20Michael%20Le%20Roux%20Practice%2C%20I%20would%20like%20to%20chat%20with%20reception%20or%20enquire%20about%20an%20appointment." target="_blank" rel="noopener">
    <svg aria-hidden="true"><use href="#whatsapp"/></svg>
    <span>Chat via WhatsApp</span>
   </a>
   <button type="button" class="da-book-cta" data-book>
    <svg aria-hidden="true"><use href="#calendar"/></svg>
    <span>Book Slot</span>
   </button>
  </div>
 `;
 document.body.appendChild(popup);

 const msgContainer=popup.querySelector('#da-messages');
 const waLink=popup.querySelector('#da-whatsapp-link');
 const soundBtn=popup.querySelector('#da-sound-toggle');
 const soundIcon=popup.querySelector('#da-sound-icon');
 const closeBtn=popup.querySelector('#da-close-btn');
 const customForm=popup.querySelector('#da-custom-form');
 const customInput=popup.querySelector('#da-custom-input');
 const unreadBadge=document.querySelector('#da-unread-badge');

 soundBtn.addEventListener('click',()=>{
  docAssistSoundEnabled=!docAssistSoundEnabled;
  localStorage.setItem('docAssistMuted',String(!docAssistSoundEnabled));
  soundIcon.textContent=docAssistSoundEnabled?'🔊':'🔇';
  soundBtn.setAttribute('aria-label',docAssistSoundEnabled?'Mute sound':'Enable sound');
  soundBtn.setAttribute('title',docAssistSoundEnabled?'Sound On (click to mute)':'Sound Muted (click to unmute)');
  if(docAssistSoundEnabled) playDocAssistSound('click');
 });

 closeBtn.addEventListener('click',()=>{
  closeDocAssist();
 });

 function answerQuestion(questionText,answerHtml){
  playDocAssistSound('click');
  const userBubble=document.createElement('div');
  userBubble.className='da-bubble user';
  userBubble.textContent=questionText;
  msgContainer.appendChild(userBubble);

  const typing=document.createElement('div');
  typing.className='da-bubble bot da-typing';
  typing.innerHTML='<span></span><span></span><span></span>';
  msgContainer.appendChild(typing);
  msgContainer.scrollTop=msgContainer.scrollHeight;

  waLink.href=`https://wa.me/27735791601?text=${encodeURIComponent('Hi Dr. Michael Le Roux Practice, ' + questionText)}`;

  setTimeout(()=>{
   typing.remove();
   const botBubble=document.createElement('div');
   botBubble.className='da-bubble bot da-answer-in';
   botBubble.innerHTML=answerHtml;
   msgContainer.appendChild(botBubble);
   msgContainer.scrollTop=msgContainer.scrollHeight;
   playDocAssistSound('reply');
  },280);
 }

 popup.querySelectorAll('[data-faq-id]').forEach(btn=>{
  btn.addEventListener('click',()=>{
   const faq=docAssistFaqs.find(f=>f.id===btn.dataset.faqId);
   if(faq) answerQuestion(faq.question,faq.answer);
  });
 });

 customForm.addEventListener('submit',e=>{
  e.preventDefault();
  const val=customInput.value.trim();
  if(!val) return;
  customInput.value='';
  answerQuestion(val,getDocAssistCustomAnswer(val));
 });
}

function openDocAssist(playChime=true){
 const popup=document.querySelector('#doc-assist-popup');
 const floatBtn=document.querySelector('.floating-whatsapp-ai');
 const badge=document.querySelector('#da-unread-badge');
 if(!popup) return;
 if(dialog?.open) dialog.close();
 popup.classList.add('open');
 popup.setAttribute('aria-hidden','false');
 floatBtn?.classList.add('active');
 if(badge) badge.style.display='none';
 if(playChime) playDocAssistSound('popup');
}

function closeDocAssist(){
 const popup=document.querySelector('#doc-assist-popup');
 const floatBtn=document.querySelector('.floating-whatsapp-ai');
 if(!popup) return;
 popup.classList.remove('open');
 popup.setAttribute('aria-hidden','true');
 floatBtn?.classList.remove('active');
}

function toggleDocAssist(){
 const popup=document.querySelector('#doc-assist-popup');
 if(!popup) return;
 if(popup.classList.contains('open')){
  closeDocAssist();
 }else{
  openDocAssist(true);
 }
}

initDocAssistWidget();

document.addEventListener('click',e=>{
 const waBtn=e.target.closest('[data-whatsapp-ai]');
 if(waBtn){
  if(waBtn.classList.contains('floating-whatsapp-ai')){
   toggleDocAssist();
  }else{
   openDocAssist(true);
  }
  return;
 }
 const book=e.target.closest('[data-book]');
 if(book){
  closeDocAssist();
  const preDoc=book.getAttribute('data-book')||'';
  const preSvc=book.getAttribute('data-book-service')||'';
  openBookingModal(preDoc,preSvc);
  return;
 }
 const blogBtn=e.target.closest('[data-blog-post]');
 if(blogBtn){
  const slug=blogBtn.getAttribute('data-blog-post');
  if(slug){
   window.location.href=`blog-${slug}.html`;
  }
  return;
 }
 const filterBtn=e.target.closest('[data-filter]');
 if(filterBtn){
  const filterVal=filterBtn.getAttribute('data-filter');
  const bar=filterBtn.closest('.blog-filter-bar');
  if(bar){
   bar.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===filterBtn));
  }
  document.querySelectorAll('[data-category]').forEach(card=>{
   const cat=card.getAttribute('data-category');
   card.style.display=(filterVal==='all'||cat===filterVal)?'':'none';
  });
  return;
 }
 const item=e.target.closest('[data-info]');
 if(item&&info[item.dataset.info]){
  const [title,body]=info[item.dataset.info];
  show(title,body,!['privacy','terms','reviews'].includes(item.dataset.info));
  return;
 }
 const service=e.target.closest('[data-service]');
 if(service){
  const i=Number(service.dataset.service);
  show(services[i][0],`<img class="dialog-photo" src="assets/service-${i}.jpg" alt="${services[i][0]}"><p>${services[i][1]}</p><p>Click <strong>Book an Appointment</strong> below to select your preferred doctor and date—our staff will reach out with available slots.</p>`);
 }
});

const contactForm=document.querySelector('#contact-form');
if(contactForm){
 const dateInput=contactForm.querySelector('input[name="date"]');
 if(dateInput&&!dateInput.value){
  dateInput.value=getTomorrowISO();
  dateInput.min=new Date().toISOString().split('T')[0];
 }
 contactForm.addEventListener('submit',e=>{
  e.preventDefault();
  handleBookingSubmission(new FormData(contactForm));
 });
}

const closeDialogBtn=document.querySelector('.close');
if(closeDialogBtn&&dialog){
 closeDialogBtn.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>lastFocus?.focus());
}
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
if(toggle&&nav){
 const headerEl=nav.closest('.header');
 let backdrop=document.querySelector('.nav-backdrop');
 if(!backdrop){
  backdrop=document.createElement('div');
  backdrop.className='nav-backdrop';
  backdrop.setAttribute('aria-hidden','true');
  if(headerEl){
   headerEl.insertBefore(backdrop,nav);
  }else{
   document.body.appendChild(backdrop);
  }
 }

 if(!nav.querySelector('.mobile-drawer-head')){
  const existingLinks=Array.from(nav.querySelectorAll(':scope > a, :scope > button'));
  const linksWrap=document.createElement('div');
  linksWrap.className='mobile-drawer-links';
  existingLinks.forEach(link=>{
   linksWrap.appendChild(link);
  });

  const drawerHead=document.createElement('div');
  drawerHead.className='mobile-drawer-head';
  drawerHead.innerHTML=`
   <a class="mobile-drawer-logo" href="index.html" aria-label="Dr. Michael Le Roux — Family Medicine Specialist">
    <img src="assets/logo.png" alt="Dr. Michael Le Roux" width="1024" height="433">
   </a>
   <button type="button" class="mobile-drawer-close" aria-label="Close navigation">
    <svg aria-hidden="true"><use href="#close"/></svg>
   </button>
  `;

  const drawerFooter=document.createElement('div');
  drawerFooter.className='mobile-drawer-footer';
  drawerFooter.innerHTML=`
   <button type="button" class="button mobile-drawer-book" data-book>
    <svg aria-hidden="true"><use href="#calendar"/></svg>
    <span>Book an Appointment</span>
   </button>
   <div class="mobile-drawer-socials">
    <p class="mobile-drawer-socials-title">Follow &amp; Connect With Us</p>
    <div class="mobile-drawer-social-links">
     <a href="https://www.facebook.com/profile.php?id=100089574591699" target="_blank" rel="noopener" aria-label="Facebook">
      <svg aria-hidden="true"><use href="#facebook"/></svg>
      <span>Facebook</span>
     </a>
     <a href="https://www.instagram.com/drmichaelleroux?igsh=ZGUwamc2bnR6Z2hs" target="_blank" rel="noopener" aria-label="Instagram">
      <svg aria-hidden="true"><use href="#instagram"/></svg>
      <span>Instagram</span>
     </a>
     <a href="https://wa.me/27735791601" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg aria-hidden="true"><use href="#whatsapp"/></svg>
      <span>WhatsApp</span>
     </a>
    </div>
   </div>
  `;

  nav.innerHTML='';
  nav.appendChild(drawerHead);
  nav.appendChild(linksWrap);
  nav.appendChild(drawerFooter);
 }

 const updateMenuIcon=open=>{
  const useEl=toggle.querySelector('use');
  if(useEl) useEl.setAttribute('href',open?'#close':'#menu');
 };

 const setMenuOpen=open=>{
  nav.classList.toggle('open',open);
  backdrop.classList.toggle('open',open);
  headerEl?.classList.toggle('nav-is-open',open);
  document.body.classList.toggle('mobile-menu-open',open);
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  updateMenuIcon(open);
 };

 toggle.addEventListener('click',()=>{
  const open=!nav.classList.contains('open');
  setMenuOpen(open);
 });

 backdrop.addEventListener('click',()=>{
  setMenuOpen(false);
 });

 nav.addEventListener('click',e=>{
  if(e.target.closest('.mobile-drawer-close')){
   setMenuOpen(false);
   return;
  }
  if(e.target.closest('a, button[data-book]')){
   setMenuOpen(false);
  }
 });

 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&nav.classList.contains('open')){
   setMenuOpen(false);
  }
 });
}