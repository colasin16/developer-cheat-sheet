if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>n(e,l),c={module:{uri:l},exports:a,require:t};s[l]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-4c5a43f1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"e4d8016a24c6ca3c0e3a3c10054b2ca9"},{url:"about/index.html",revision:"f1d7fdd96726ad2d27110ab396acf3cc"},{url:"archive/code-smells/primitive-obsession/index.html",revision:"a187e6f49c158bc0d265531afa63a641"},{url:"archive/concepts-definitions/abstraction/index.html",revision:"8ed549010772e4153503a0cccf3d6728"},{url:"archive/concepts-definitions/domain-model/index.html",revision:"feefdc4fb87d3b4dad85b931457154b4"},{url:"archive/concepts-definitions/encapsulation/index.html",revision:"b2bbc7785123c05cd83a79933704e510"},{url:"archive/concepts-definitions/index.html",revision:"23f79915d21830c5341c03d13550985f"},{url:"archive/index.html",revision:"f07c948f7d41ca121a6e94b914ac5ee7"},{url:"archive/patterns/criteria/index.html",revision:"47913cddeccccc572e21d18711200a34"},{url:"archive/refactoring/index.html",revision:"9d8e12ee69958780fd0b3356da20e5c4"},{url:"assets/about_index.md.f76716ed.js",revision:null},{url:"assets/about_index.md.f76716ed.lean.js",revision:null},{url:"assets/abstractRecursiveSet.b7b24fbd.png",revision:null},{url:"assets/activityKlondike.2f0d0357.png",revision:null},{url:"assets/aggregation.3be4c67b.png",revision:null},{url:"assets/app.d99cad5f.js",revision:null},{url:"assets/archive_code-smells_primitive-obsession_index.md.bbf8f6b2.js",revision:null},{url:"assets/archive_code-smells_primitive-obsession_index.md.bbf8f6b2.lean.js",revision:null},{url:"assets/archive_concepts-definitions_abstraction_index.md.1f02f2f8.js",revision:null},{url:"assets/archive_concepts-definitions_abstraction_index.md.1f02f2f8.lean.js",revision:null},{url:"assets/archive_concepts-definitions_domain-model_index.md.5a69d1b2.js",revision:null},{url:"assets/archive_concepts-definitions_domain-model_index.md.5a69d1b2.lean.js",revision:null},{url:"assets/archive_concepts-definitions_encapsulation_index.md.4f5c6b15.js",revision:null},{url:"assets/archive_concepts-definitions_encapsulation_index.md.4f5c6b15.lean.js",revision:null},{url:"assets/archive_concepts-definitions_index.md.f77fc8a5.js",revision:null},{url:"assets/archive_concepts-definitions_index.md.f77fc8a5.lean.js",revision:null},{url:"assets/archive_index.md.d108b5a3.js",revision:null},{url:"assets/archive_index.md.d108b5a3.lean.js",revision:null},{url:"assets/archive_patterns_criteria_index.md.15fa9725.js",revision:null},{url:"assets/archive_patterns_criteria_index.md.15fa9725.lean.js",revision:null},{url:"assets/archive_refactoring_index.md.ea6b479b.js",revision:null},{url:"assets/archive_refactoring_index.md.ea6b479b.lean.js",revision:null},{url:"assets/circulo.4529406e.png",revision:null},{url:"assets/classesKlondike.6b63ed26.png",revision:null},{url:"assets/classification.cb9ba7fe.png",revision:null},{url:"assets/collaborationUniversidad.71523299.png",revision:null},{url:"assets/dikw-pyramid.e627fe34.png",revision:null},{url:"assets/familyTree.5e9909c6.png",revision:null},{url:"assets/graph.b446170d.png",revision:null},{url:"assets/graph.b5d1c710.png",revision:null},{url:"assets/hierarchy.02e20055.png",revision:null},{url:"assets/hierarchy.3636160c.png",revision:null},{url:"assets/hierarchyWindow.56e43bdd.png",revision:null},{url:"assets/index.md.8707f6e6.js",revision:null},{url:"assets/index.md.8707f6e6.lean.js",revision:null},{url:"assets/inter-cyrillic-ext.0877b0d9.woff2",revision:null},{url:"assets/inter-cyrillic.f8750142.woff2",revision:null},{url:"assets/inter-greek-ext.3e6f6728.woff2",revision:null},{url:"assets/inter-greek.117e1956.woff2",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-latin-ext.7cc429bc.woff2",revision:null},{url:"assets/inter-latin.4fe6132f.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/inter-vietnamese.2c644a25.woff2",revision:null},{url:"assets/learn_agile_index.md.1ed5e271.js",revision:null},{url:"assets/learn_agile_index.md.1ed5e271.lean.js",revision:null},{url:"assets/learn_index.md.77076d94.js",revision:null},{url:"assets/learn_index.md.77076d94.lean.js",revision:null},{url:"assets/learn_ood_index.md.09220da2.js",revision:null},{url:"assets/learn_ood_index.md.09220da2.lean.js",revision:null},{url:"assets/learn_oop_index.md.c0a7cb84.js",revision:null},{url:"assets/learn_oop_index.md.c0a7cb84.lean.js",revision:null},{url:"assets/learn_patterns_index.md.30a9c63c.js",revision:null},{url:"assets/learn_patterns_index.md.30a9c63c.lean.js",revision:null},{url:"assets/learn_recurrence_complexity_index.md.2428625a.js",revision:null},{url:"assets/learn_recurrence_complexity_index.md.2428625a.lean.js",revision:null},{url:"assets/learn_recurrence_index.md.4594987f.js",revision:null},{url:"assets/learn_recurrence_index.md.4594987f.lean.js",revision:null},{url:"assets/learn_recurrence_knowledge_index.md.aa705173.js",revision:null},{url:"assets/learn_recurrence_knowledge_index.md.aa705173.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_index.md.ccf948ad.js",revision:null},{url:"assets/learn_recurrence_patterns_index.md.ccf948ad.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_AlternantCode.md.ecff096c.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_AlternantCode.md.ecff096c.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_IterativeCode.md.adb6d5a1.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_IterativeCode.md.adb6d5a1.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_SequenceCode.md.9e6d8db6.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_SequenceCode.md.9e6d8db6.lean.js",revision:null},{url:"assets/learn_recurrence_software_index.md.34f5736f.js",revision:null},{url:"assets/learn_recurrence_software_index.md.34f5736f.lean.js",revision:null},{url:"assets/learn_recurrence_software-disciplines_index.md.19958f3a.js",revision:null},{url:"assets/learn_recurrence_software-disciplines_index.md.19958f3a.lean.js",revision:null},{url:"assets/learn_recurrence_software-evolution_index.md.31ff75ee.js",revision:null},{url:"assets/learn_recurrence_software-evolution_index.md.31ff75ee.lean.js",revision:null},{url:"assets/learn_software-architecture_index.md.4f12f6d3.js",revision:null},{url:"assets/learn_software-architecture_index.md.4f12f6d3.lean.js",revision:null},{url:"assets/learn_testing_index.md.eda57ea1.js",revision:null},{url:"assets/learn_testing_index.md.eda57ea1.lean.js",revision:null},{url:"assets/learn_unified-process_index.md.9efb6fa2.js",revision:null},{url:"assets/learn_unified-process_index.md.9efb6fa2.lean.js",revision:null},{url:"assets/multipleClassification.f1f00c47.png",revision:null},{url:"assets/objectsKlondike.59dad021.png",revision:null},{url:"assets/orderFromSet.2f4ccc2c.png",revision:null},{url:"assets/partOfWhole.4a99d7b7.png",revision:null},{url:"assets/recursiveSet.02034807.png",revision:null},{url:"assets/sequence.0d7ceb36.png",revision:null},{url:"assets/sequence.8f745628.png",revision:null},{url:"assets/sequenceKlondike.baecfde2.png",revision:null},{url:"assets/set.fb2e8bab.png",revision:null},{url:"assets/setClass.a8901f5e.png",revision:null},{url:"assets/statesKlondike.4c2d911d.png",revision:null},{url:"assets/style.3302fc11.css",revision:null},{url:"assets/tree.64ae06db.png",revision:null},{url:"assets/welcome.md.b91e1832.js",revision:null},{url:"assets/welcome.md.b91e1832.lean.js",revision:null},{url:"assets/woman.37175c11.png",revision:null},{url:"assets/xp.25414e8e.png",revision:null},{url:"assets/you.e99b394f.png",revision:null},{url:"index.html",revision:"b0bbd014b681181b1f742223e511e0a4"},{url:"learn/agile/index.html",revision:"8b95b336b3bd0ec3959896558d051688"},{url:"learn/index.html",revision:"d53cbdbc7158b551df6e9d2fc2eef6aa"},{url:"learn/ood/index.html",revision:"5f39c0c4023fe3e1d75e856affa31eee"},{url:"learn/oop/index.html",revision:"e4f9898a459ca4e7c1b5fe00fe7ca1e6"},{url:"learn/patterns/index.html",revision:"7faeb33ada5a4a1cf1635f313e7e3708"},{url:"learn/recurrence/complexity/index.html",revision:"2fc7b69ff713ec9261da14cc2efd58bf"},{url:"learn/recurrence/index.html",revision:"533a3e8d0f73d10ddb37719f89532cc2"},{url:"learn/recurrence/knowledge/index.html",revision:"dfd4a4fec0385c2b0be3c947616a049a"},{url:"learn/recurrence/patterns/index.html",revision:"b969a789433c13a5be631c96289591b8"},{url:"learn/recurrence/patterns/prettier-ignore/AlternantCode.html",revision:"1b10c3576852b4f46623690196f5c0fe"},{url:"learn/recurrence/patterns/prettier-ignore/IterativeCode.html",revision:"0a5c4850c8a3d13b58932ba09be31692"},{url:"learn/recurrence/patterns/prettier-ignore/SequenceCode.html",revision:"556ea4a250c8bca9c71de566c443ac16"},{url:"learn/recurrence/software-disciplines/index.html",revision:"b2795f48a72d69c6714a289f5691e970"},{url:"learn/recurrence/software-evolution/index.html",revision:"a426007b1c94d471324c4ebd311e115a"},{url:"learn/recurrence/software/index.html",revision:"25ab3b8331c4271164fdd5ea08f3777f"},{url:"learn/software-architecture/index.html",revision:"e5e0ac751e0df9f4ebaa043de3cf2698"},{url:"learn/testing/index.html",revision:"5163f73780f09e1108148018d72231d0"},{url:"learn/unified-process/index.html",revision:"d626474e1b11dc53a57729a32d2261c6"},{url:"recurrence/patterns/universo.svg",revision:"8e10d3486e80d0485ca4f88d7d2c052a"},{url:"registerSW.js",revision:"bab97b5b4ce65dd2bfe514326370a9fc"},{url:"welcome.html",revision:"098b875eef5b040df9cf390dd99542d4"},{url:"manifest.webmanifest",revision:"115c2a1d4aeb2c487188e0ca1108fcc2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
