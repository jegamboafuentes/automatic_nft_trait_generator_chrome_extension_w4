//Enrique note: 
//This code controlls the back end of the extension
//-GCP API CALL

//gcpResponse1 = "{\r\n   \"Font\":77.10,\r\n   \"Art\":76.7,\r\n   \"Gas\":74.8,\r\n   \"Electric blue\":72.39999999999999,\n imager\n   \"Symbol\":70.5,\r\n   \"Logo\":67.9,\r\n   \"Cross\":64.60000000000001,\r\n   \"Brand\":63.2,\r\n   \"Signage\":62.2,\r\n   \"Sign\":62.2\r\n}"
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/0dnr7","description":"Textile","score":0.8754076,"topicality":0.8754076},{"mid":"/m/0jjw","description":"Art","score":0.79320127,"topicality":0.79320127},{"mid":"/m/0hwky","description":"Pattern","score":0.76035386,"topicality":0.76035386},{"mid":"/m/0p9xx","description":"Visual arts","score":0.6836929,"topicality":0.6836929},{"mid":"/m/0ckc5","description":"Magenta","score":0.68233865,"topicality":0.68233865},{"mid":"/m/081pkj","description":"Event","score":0.6461697,"topicality":0.6461697},{"mid":"/m/05qdh","description":"Painting","score":0.6254865,"topicality":0.6254865},{"mid":"/m/02csf","description":"Drawing","score":0.6236745,"topicality":0.6236745},{"mid":"/m/06y_bg","description":"Hindu temple","score":0.5757788,"topicality":0.5757788},{"mid":"/m/01kr8f","description":"Illustration","score":0.54011476,"topicality":0.54011476},{"mid":"/m/02h7lkt","description":"Fictional character","score":0.5019981,"topicality":0.5019981}]}]}'
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/0dnr7","description":"Textile","score":0.8754076,"topicality":0.8754076},{"mid":"/m/0jjw","description":"Art","score":0.79320127,"topicality":0.79320127},{"mid":"/m/0hwky","description":"Pattern","score":0.76035386,"topicality":0.76035386},{"mid":"/m/0p9xx","description":"Visual arts","score":0.6836929,"topicality":0.6836929},{"mid":"/m/0ckc5","description":"Magenta","score":0.68233865,"topicality":0.68233865},{"mid":"/m/081pkj","description":"Event","score":0.6461697,"topicality":0.6461697},{"mid":"/m/05qdh","description":"Painting","score":0.6254865,"topicality":0.6254865},{"mid":"/m/02csf","description":"Drawing","score":0.6236745,"topicality":0.6236745},{"mid":"/m/06y_bg","description":"Hindu temple","score":0.5757788,"topicality":0.5757788},{"mid":"/m/01kr8f","description":"Illustration","score":0.54011476,"topicality":0.54011476},{"mid":"/m/02h7lkt","description":"Fictional character","score":0.5019981,"topicality":0.5019981}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":231,"green":230,"blue":232},"score":0.14724371,"pixelFraction":0.037633136},{"color":{"red":196,"green":196,"blue":196},"score":0.12077889,"pixelFraction":0.12390532},{"color":{"red":158,"green":156,"blue":156},"score":0.095004775,"pixelFraction":0.14982249},{"color":{"red":163,"green":156,"blue":129},"score":0.062406763,"pixelFraction":0.08852071},{"color":{"red":124,"green":120,"blue":120},"score":0.058162913,"pixelFraction":0.106390536},{"color":{"red":201,"green":232,"blue":226},"score":0.052365024,"pixelFraction":0.005266272},{"color":{"red":129,"green":120,"blue":94},"score":0.041761857,"pixelFraction":0.066331364},{"color":{"red":173,"green":204,"blue":196},"score":0.03636038,"pixelFraction":0.00739645},{"color":{"red":196,"green":192,"blue":166},"score":0.03320732,"pixelFraction":0.04035503},{"color":{"red":217,"green":187,"blue":200},"score":0.031605978,"pixelFraction":0.01183432}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":125},{"x":405},{"x":405,"y":499},{"x":125,"y":499}]},"confidence":0.71875,"importanceFraction":0.85333335}]}}]}'
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/09nm_","description":"World","score":0.91916865,"topicality":0.91916865},{"mid":"/m/03gq5hm","description":"Font","score":0.84988856,"topicality":0.84988856},{"mid":"/m/0jjw","description":"Art","score":0.8284639,"topicality":0.8284639},{"mid":"/m/05_5t0l","description":"Landmark","score":0.79438037,"topicality":0.79438037},{"mid":"/m/0d9wj","description":"Urban design","score":0.7869585,"topicality":0.7869585},{"mid":"/m/01n32","description":"City","score":0.7541019,"topicality":0.7541019},{"mid":"/m/01kr8f","description":"Illustration","score":0.7178446,"topicality":0.7178446},{"mid":"/m/05qdh","description":"Painting","score":0.7042772,"topicality":0.7042772},{"mid":"/m/02cwm","description":"Design","score":0.6860201,"topicality":0.6860201},{"mid":"/m/02csf","description":"Drawing","score":0.6739092,"topicality":0.6739092},{"mid":"/m/021sdg","description":"Graphics","score":0.6399031,"topicality":0.6399031}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":39,"green":56,"blue":24},"score":0.09314957,"pixelFraction":0.039635833},{"color":{"red":97,"green":87,"blue":36},"score":0.065566026,"pixelFraction":0.015240682},{"color":{"red":10,"green":17,"blue":4},"score":0.03869305,"pixelFraction":0.060510036},{"color":{"red":184,"green":201,"blue":167},"score":0.019995837,"pixelFraction":0.022835873},{"color":{"red":238,"green":179,"blue":98},"score":0.0021283163,"pixelFraction":0.00035209497},{"color":{"red":16,"green":32,"blue":6},"score":0.065126985,"pixelFraction":0.026708918},{"color":{"red":72,"green":87,"blue":52},"score":0.06335014,"pixelFraction":0.03088376},{"color":{"red":128,"green":116,"blue":62},"score":0.060484495,"pixelFraction":0.01679996},{"color":{"red":25,"green":100,"blue":57},"score":0.035763185,"pixelFraction":0.0043760375},{"color":{"red":53,"green":50,"blue":18},"score":0.03342261,"pixelFraction":0.028368793}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":110},{"x":522},{"x":522,"y":735},{"x":110,"y":735}]},"confidence":0.78125,"importanceFraction":0.7791305}]}}]}';
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/04k84","description":"Light","score":0.91076016,"topicality":0.91076016},{"mid":"/m/083vt","description":"Wood","score":0.8941104,"topicality":0.8941104},{"mid":"/m/0f28m","description":"Symmetry","score":0.7559865,"topicality":0.7559865},{"mid":"/m/02ky346","description":"Engineering","score":0.70446277,"topicality":0.70446277},{"mid":"/m/01kv7h","description":"Midnight","score":0.6999159,"topicality":0.6999159},{"mid":"/m/025tnyc","description":"Lumber","score":0.69388705,"topicality":0.69388705},{"mid":"/m/01bqvp","description":"Sky","score":0.6868126,"topicality":0.6868126},{"mid":"/m/02cr01","description":"Building material","score":0.6830882,"topicality":0.6830882},{"mid":"/m/014qzr","description":"Composite material","score":0.676763,"topicality":0.676763},{"mid":"/m/01kyr8","description":"Darkness","score":0.6761401,"topicality":0.6761401},{"mid":"/m/06hyd","description":"Roof","score":0.6342899,"topicality":0.6342899}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":108,"green":76,"blue":59},"score":0.14459078,"pixelFraction":0.04476636},{"color":{"red":58,"green":51,"blue":50},"score":0.05675926,"pixelFraction":0.1259494},{"color":{"red":176,"green":150,"blue":133},"score":0.055986192,"pixelFraction":0.020119712},{"color":{"red":143,"green":110,"blue":93},"score":0.112273075,"pixelFraction":0.035209496},{"color":{"red":76,"green":46,"blue":32},"score":0.110678315,"pixelFraction":0.037875358},{"color":{"red":138,"green":113,"blue":96},"score":0.055608768,"pixelFraction":0.020119712},{"color":{"red":180,"green":146,"blue":127},"score":0.053214632,"pixelFraction":0.01810774},{"color":{"red":90,"green":79,"blue":76},"score":0.05111222,"pixelFraction":0.06850762},{"color":{"red":103,"green":81,"blue":65},"score":0.048341703,"pixelFraction":0.023992756},{"color":{"red":215,"green":188,"blue":168},"score":0.039212253,"pixelFraction":0.020220311}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"y":73},{"x":735,"y":73},{"x":735,"y":489},{"y":489}]},"confidence":0.75,"importanceFraction":0.75329566}]}}]}'
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/09nm_","description":"World","score":0.8851287,"topicality":0.8851287},{"mid":"/m/03gq5hm","description":"Font","score":0.82826996,"topicality":0.82826996},{"mid":"/m/0jjw","description":"Art","score":0.82026994,"topicality":0.82026994},{"mid":"/m/05qdh","description":"Painting","score":0.792051,"topicality":0.792051},{"mid":"/m/02h7lkt","description":"Fictional character","score":0.7477354,"topicality":0.7477354},{"mid":"/m/01kr8f","description":"Illustration","score":0.74166685,"topicality":0.74166685},{"mid":"/m/01n5jq","description":"Poster","score":0.7305157,"topicality":0.7305157},{"mid":"/m/02csf","description":"Drawing","score":0.7070147,"topicality":0.7070147},{"mid":"/m/03bt1gh","description":"Games","score":0.68136567,"topicality":0.68136567},{"mid":"/m/0ffjr","description":"Personal protective equipment","score":0.676892,"topicality":0.676892},{"mid":"/m/021sdg","description":"Graphics","score":0.6642155,"topicality":0.6642155}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":167,"green":158,"blue":122},"score":0.13738695,"pixelFraction":0.063175894},{"color":{"red":198,"green":194,"blue":155},"score":0.1243916,"pixelFraction":0.048740003},{"color":{"red":130,"green":119,"blue":86},"score":0.09287858,"pixelFraction":0.064684875},{"color":{"red":174,"green":160,"blue":105},"score":0.07319524,"pixelFraction":0.01468739},{"color":{"red":94,"green":84,"blue":53},"score":0.07230553,"pixelFraction":0.06423218},{"color":{"red":60,"green":52,"blue":24},"score":0.05577855,"pixelFraction":0.054122027},{"color":{"red":196,"green":189,"blue":136},"score":0.050303042,"pixelFraction":0.0077460892},{"color":{"red":231,"green":231,"blue":195},"score":0.03718518,"pixelFraction":0.022232283},{"color":{"red":194,"green":202,"blue":159},"score":0.028628826,"pixelFraction":0.010462251},{"color":{"red":133,"green":123,"blue":71},"score":0.026455723,"pixelFraction":0.011971229}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"y":73},{"x":735,"y":73},{"x":735,"y":489},{"y":489}]},"confidence":0.8125,"importanceFraction":0.75329566}]}}]}'
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/0jjw","description":"Art","score":0.85299236,"topicality":0.85299236},{"mid":"/m/0215n","description":"Cartoon","score":0.8346728,"topicality":0.8346728},{"mid":"/m/05y4t","description":"Paint","score":0.82975245,"topicality":0.82975245},{"mid":"/m/05qdh","description":"Painting","score":0.8284733,"topicality":0.8284733},{"mid":"/m/03gq5hm","description":"Font","score":0.82679576,"topicality":0.82679576},{"mid":"/m/050h26","description":"Drinkware","score":0.7871997,"topicality":0.7871997},{"mid":"/m/02h7lkt","description":"Fictional character","score":0.75279224,"topicality":0.75279224},{"mid":"/m/018ktp","description":"Watercolor paint","score":0.74170995,"topicality":0.74170995},{"mid":"/m/01kr8f","description":"Illustration","score":0.74134886,"topicality":0.74134886},{"mid":"/m/0p9xx","description":"Visual arts","score":0.70439774,"topicality":0.70439774},{"mid":"/m/02csf","description":"Drawing","score":0.7002028,"topicality":0.7002028}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":132,"green":163,"blue":121},"score":0.06263738,"pixelFraction":0.06156632},{"color":{"red":62,"green":91,"blue":55},"score":0.060009915,"pixelFraction":0.032996327},{"color":{"red":14,"green":14,"blue":5},"score":0.01207224,"pixelFraction":0.021930486},{"color":{"red":29,"green":58,"blue":24},"score":0.056629706,"pixelFraction":0.030179568},{"color":{"red":98,"green":128,"blue":90},"score":0.055975854,"pixelFraction":0.039434638},{"color":{"red":72,"green":130,"blue":86},"score":0.055919044,"pixelFraction":0.038981944},{"color":{"red":40,"green":95,"blue":52},"score":0.04294412,"pixelFraction":0.01891253},{"color":{"red":104,"green":167,"blue":122},"score":0.03810221,"pixelFraction":0.039384335},{"color":{"red":51,"green":94,"blue":79},"score":0.035662692,"pixelFraction":0.017051456},{"color":{"red":165,"green":201,"blue":161},"score":0.035258833,"pixelFraction":0.048387907}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":184},{"x":596},{"x":596,"y":735},{"x":184,"y":735}]},"confidence":0.8125,"importanceFraction":0.71680003}]}}]}' 
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/071j9r","description":"Cool","score":0.81464124,"topicality":0.81464124},{"mid":"/m/0jjw","description":"Art","score":0.80103076,"topicality":0.80103076},{"mid":"/m/02h7lkt","description":"Fictional character","score":0.74187475,"topicality":0.74187475},{"mid":"/m/081pkj","description":"Event","score":0.7301378,"topicality":0.7301378},{"mid":"/m/03gq5hm","description":"Font","score":0.718375,"topicality":0.718375},{"mid":"/m/034wh","description":"Graffiti","score":0.7126146,"topicality":0.7126146},{"mid":"/m/0n1h","description":"Artist","score":0.702277,"topicality":0.702277},{"mid":"/m/011s0","description":"Advertising","score":0.6812067,"topicality":0.6812067},{"mid":"/m/01sdv7","description":"Vest","score":0.6804516,"topicality":0.6804516},{"mid":"/m/0250x","description":"Costume","score":0.670132,"topicality":0.670132},{"mid":"/m/01n32","description":"City","score":0.6436526,"topicality":0.6436526}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":98,"green":23,"blue":27},"score":0.061303522,"pixelFraction":0.025602333},{"color":{"red":181,"green":94,"blue":93},"score":0.0498058,"pixelFraction":0.017453851},{"color":{"red":41,"green":8,"blue":14},"score":0.037980307,"pixelFraction":0.036567576},{"color":{"red":46,"green":91,"blue":80},"score":0.006516687,"pixelFraction":0.0063880086},{"color":{"red":64,"green":172,"blue":150},"score":0.005948879,"pixelFraction":0.0025652633},{"color":{"red":247,"green":232,"blue":195},"score":0.004106225,"pixelFraction":0.012172426},{"color":{"red":7,"green":44,"blue":160},"score":0.0018048475,"pixelFraction":0.00065389066},{"color":{"red":127,"green":42,"blue":162},"score":0.0007994696,"pixelFraction":0.0010059857},{"color":{"red":141,"green":59,"blue":60},"score":0.043807715,"pixelFraction":0.019868216},{"color":{"red":200,"green":80,"blue":93},"score":0.036949776,"pixelFraction":0.0065389066}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"y":36},{"x":735,"y":36},{"x":735,"y":452},{"y":452}]},"confidence":0.84375006,"importanceFraction":0.6953499}]}}]}'
//gcpResponse1_1='{"responses":[{"labelAnnotations":[{"mid":"/m/01bqvp","description":"Sky","score":0.93556726,"topicality":0.93556726},{"mid":"/m/09nm_","description":"World","score":0.9272045,"topicality":0.9272045},{"mid":"/m/05h0n","description":"Nature","score":0.9011808,"topicality":0.9011808},{"mid":"/m/01fdzj","description":"Tower","score":0.87927467,"topicality":0.87927467},{"mid":"/m/05y4t","description":"Paint","score":0.8676156,"topicality":0.8676156},{"mid":"/m/0csby","description":"Cloud","score":0.83290946,"topicality":0.83290946},{"mid":"/m/05qdh","description":"Painting","score":0.82723516,"topicality":0.82723516},{"mid":"/m/0jjw","description":"Art","score":0.8224375,"topicality":0.8224375},{"mid":"/m/07j7r","description":"Tree","score":0.8217504,"topicality":0.8217504},{"mid":"/m/09qqq","description":"Wall","score":0.80896705,"topicality":0.80896705},{"mid":"/m/05s2s","description":"Plant","score":0.8079503,"topicality":0.8079503}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":137,"green":149,"blue":174},"score":0.15738761,"pixelFraction":0.07464413},{"color":{"red":131,"green":111,"blue":147},"score":0.10231663,"pixelFraction":0.035159197},{"color":{"red":53,"green":57,"blue":59},"score":0.045697134,"pixelFraction":0.034656204},{"color":{"red":34,"green":55,"blue":30},"score":0.013412034,"pixelFraction":0.010462251},{"color":{"red":114,"green":124,"blue":149},"score":0.07157818,"pixelFraction":0.06453398},{"color":{"red":146,"green":153,"blue":159},"score":0.068469934,"pixelFraction":0.08495548},{"color":{"red":106,"green":82,"blue":119},"score":0.059076898,"pixelFraction":0.028821487},{"color":{"red":77,"green":81,"blue":82},"score":0.04272654,"pixelFraction":0.04064182},{"color":{"red":121,"green":121,"blue":124},"score":0.04099567,"pixelFraction":0.07348725},{"color":{"red":152,"green":138,"blue":175},"score":0.026460946,"pixelFraction":0.0052311253}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"y":257},{"x":735,"y":257},{"x":735,"y":673},{"y":673}]},"confidence":0.7076543,"importanceFraction":0.98888886}]}}]}'
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/04k84","description":"Light","score":0.91189146,"topicality":0.91189146},{"mid":"/m/08g_yr","description":"Temple","score":0.8750178,"topicality":0.8750178},{"mid":"/m/0cgh4","description":"Building","score":0.86225945,"topicality":0.86225945},{"mid":"/m/0jjw","description":"Art","score":0.79283696,"topicality":0.79283696},{"mid":"/m/01x314","description":"Facade","score":0.7551649,"topicality":0.7551649},{"mid":"/m/012ww9","description":"Archaeological site","score":0.74931914,"topicality":0.74931914},{"mid":"/m/02ljgl","description":"Monument","score":0.7383,"topicality":0.7383},{"mid":"/m/06msq","description":"Sculpture","score":0.73154217,"topicality":0.73154217},{"mid":"/m/01bqvp","description":"Sky","score":0.69652784,"topicality":0.69652784},{"mid":"/m/0djmp","description":"Ancient history","score":0.69496,"topicality":0.69496},{"mid":"/m/065zs54","description":"Holy places","score":0.68172055,"topicality":0.68172055}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":100,"green":80,"blue":59},"score":0.14119767,"pixelFraction":0.124015905},{"color":{"red":184,"green":151,"blue":97},"score":0.13558964,"pixelFraction":0.028406786},{"color":{"red":192,"green":139,"blue":68},"score":0.0057008546,"pixelFraction":0.0021102184},{"color":{"red":219,"green":187,"blue":127},"score":0.12746271,"pixelFraction":0.02499797},{"color":{"red":135,"green":116,"blue":91},"score":0.12615733,"pixelFraction":0.11719828},{"color":{"red":170,"green":150,"blue":124},"score":0.089180596,"pixelFraction":0.072883695},{"color":{"red":151,"green":118,"blue":71},"score":0.0763483,"pixelFraction":0.0159078},{"color":{"red":69,"green":52,"blue":33},"score":0.057169795,"pixelFraction":0.08035062},{"color":{"red":248,"green":222,"blue":165},"score":0.051068638,"pixelFraction":0.01412223},{"color":{"red":149,"green":107,"blue":53},"score":0.036291853,"pixelFraction":0.0086031975}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"y":55},{"x":255,"y":55},{"x":255,"y":200},{"y":200}]},"confidence":0.875,"importanceFraction":0.9039547}]}}]}'
//gcpResponse1_1 = "";
//DEMO DAY
//3d dog
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/0bt9lr","description":"Dog","score":0.94733787,"topicality":0.94733787},{"mid":"/m/0138tl","description":"Toy","score":0.9090716,"topicality":0.9090716},{"mid":"/m/0244x1","description":"Gesture","score":0.85260487,"topicality":0.85260487},{"mid":"/m/0215n","description":"Cartoon","score":0.83830065,"topicality":0.83830065},{"mid":"/m/01lrl","description":"Carnivore","score":0.81599,"topicality":0.81599},{"mid":"/m/03gq5hm","description":"Font","score":0.77682203,"topicality":0.77682203},{"mid":"/m/07_gml","description":"Working animal","score":0.7720224,"topicality":0.7720224},{"mid":"/m/05mqq3","description":"Snout","score":0.7551637,"topicality":0.7551637},{"mid":"/m/0h8m7cs","description":"Animal figure","score":0.71612024,"topicality":0.71612024},{"mid":"/m/02vwbzz","description":"Electric blue","score":0.6565003,"topicality":0.6565003},{"mid":"/m/021sdg","description":"Graphics","score":0.6544055,"topicality":0.6544055}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":68,"green":78,"blue":201},"score":0.23182543,"pixelFraction":0.011476699},{"color":{"red":84,"green":90,"blue":248},"score":0.050634384,"pixelFraction":0.002961729},{"color":{"red":70,"green":72,"blue":133},"score":0.04568371,"pixelFraction":0.003331945},{"color":{"red":96,"green":83,"blue":77},"score":0.023936886,"pixelFraction":0.056781895},{"color":{"red":157,"green":160,"blue":193},"score":0.00288297,"pixelFraction":0.0016659725},{"color":{"red":233,"green":234,"blue":238},"score":0.0028485341,"pixelFraction":0.38599658},{"color":{"red":87,"green":96,"blue":235},"score":0.22694814,"pixelFraction":0.014716091},{"color":{"red":61,"green":66,"blue":166},"score":0.20385107,"pixelFraction":0.009995835},{"color":{"red":64,"green":68,"blue":150},"score":0.03186779,"pixelFraction":0.0017585265},{"color":{"red":51,"green":51,"blue":143},"score":0.02478855,"pixelFraction":0.0011106484}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":180},{"x":687},{"x":687,"y":903},{"x":180,"y":903}]},"confidence":0.7324219,"importanceFraction":1}]}}]}'
//trex
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/07_gml","description":"Working animal","score":0.8676187,"topicality":0.8676187},{"mid":"/m/0244x1","description":"Gesture","score":0.8526048,"topicality":0.8526048},{"mid":"/m/0276krm","description":"Fawn","score":0.81571174,"topicality":0.81571174},{"mid":"/m/01lrl","description":"Carnivore","score":0.7979381,"topicality":0.7979381},{"mid":"/m/0kpmf","description":"Dog breed","score":0.78984994,"topicality":0.78984994},{"mid":"/m/0fbf1m","description":"Terrestrial animal","score":0.7546175,"topicality":0.7546175},{"mid":"/m/03gq5hm","description":"Font","score":0.70955235,"topicality":0.70955235},{"mid":"/m/06z_nw","description":"Tail","score":0.7070281,"topicality":0.7070281},{"mid":"/m/0265rtm","description":"Sporting Group","score":0.7051484,"topicality":0.7051484},{"mid":"/m/02vwbzz","description":"Electric blue","score":0.6936649,"topicality":0.6936649},{"mid":"/m/0h8m7cs","description":"Animal figure","score":0.6871206,"topicality":0.6871206}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":63,"green":68,"blue":166},"score":0.18098375,"pixelFraction":0.008607524},{"color":{"red":93,"green":97,"blue":236},"score":0.1512566,"pixelFraction":0.01022722},{"color":{"red":52,"green":56,"blue":123},"score":0.09824106,"pixelFraction":0.0046739783},{"color":{"red":92,"green":76,"blue":60},"score":0.022662846,"pixelFraction":0.017770374},{"color":{"red":242,"green":243,"blue":248},"score":0.010146,"pixelFraction":0.0090240175},{"color":{"red":151,"green":154,"blue":183},"score":0.007258789,"pixelFraction":0.0048590866},{"color":{"red":72,"green":79,"blue":202},"score":0.10456109,"pixelFraction":0.0050904714},{"color":{"red":68,"green":70,"blue":134},"score":0.07744223,"pixelFraction":0.0045351475},{"color":{"red":60,"green":65,"blue":147},"score":0.07529917,"pixelFraction":0.003378222},{"color":{"red":48,"green":54,"blue":134},"score":0.060187712,"pixelFraction":0.0023138507}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":135},{"x":641},{"x":641,"y":903},{"x":135,"y":903}]},"confidence":0.5179268,"importanceFraction":1}]}}]}'
//gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/03hl4l9","description":"Marine invertebrates","score":0.8966519,"topicality":0.8966519},{"mid":"/m/02q2rdb","description":"octopus","score":0.8488862,"topicality":0.8488862},{"mid":"/m/0244x1","description":"Gesture","score":0.81634253,"topicality":0.81634253},{"mid":"/m/0jjw","description":"Art","score":0.8074753,"topicality":0.8074753},{"mid":"/m/05py0","description":"Octopus","score":0.80376077,"topicality":0.80376077},{"mid":"/m/0bqwj","description":"Cephalopod","score":0.7906032,"topicality":0.7906032},{"mid":"/m/03gq5hm","description":"Font","score":0.71461105,"topicality":0.71461105},{"mid":"/m/02vwbzz","description":"Electric blue","score":0.70836186,"topicality":0.70836186},{"mid":"/m/09ddf","description":"Symbol","score":0.6545556,"topicality":0.6545556},{"mid":"/m/01vkl","description":"Circle","score":0.631386,"topicality":0.631386},{"mid":"/m/021sdg","description":"Graphics","score":0.6235242,"topicality":0.6235242},{"mid":"/m/01kr8f","description":"Illustration","score":0.61226445,"topicality":0.61226445},{"mid":"/m/01j51","description":"Balloon","score":0.609742,"topicality":0.609742},{"mid":"/m/0dwx7","description":"Logo","score":0.58165175,"topicality":0.58165175},{"mid":"/m/03c31","description":"Graphic design","score":0.54796135,"topicality":0.54796135},{"mid":"/m/06y47","description":"Sphere","score":0.54699546,"topicality":0.54699546}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":75,"green":76,"blue":172},"score":0.23022044,"pixelFraction":0.014345874},{"color":{"red":90,"green":96,"blue":227},"score":0.22072497,"pixelFraction":0.01906613},{"color":{"red":102,"green":36,"blue":27},"score":0.042328913,"pixelFraction":0.046508398},{"color":{"red":137,"green":56,"blue":35},"score":0.012368142,"pixelFraction":0.010134666},{"color":{"red":145,"green":146,"blue":220},"score":0.0029851259,"pixelFraction":0.0012032024},{"color":{"red":196,"green":201,"blue":232},"score":0.0026097763,"pixelFraction":0.003008006},{"color":{"red":70,"green":73,"blue":157},"score":0.15842658,"pixelFraction":0.009949558},{"color":{"red":229,"green":187,"blue":200},"score":0.00091637747,"pixelFraction":0.0026840668},{"color":{"red":71,"green":73,"blue":140},"score":0.08630199,"pixelFraction":0.0076819845},{"color":{"red":92,"green":93,"blue":200},"score":0.070371665,"pixelFraction":0.005506965}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":135},{"x":641},{"x":641,"y":903},{"x":135,"y":903}]},"confidence":0.80343187,"importanceFraction":0.9326317}]}}]}'
//alert("que pedo");

gcpResponse1_1 = '{"responses":[{"labelAnnotations":[{"mid":"/m/03hl4l9","description":"NO IMG SELECTED","score":0.8966519,"topicality":0.8966519}],"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":75,"green":76,"blue":172},"score":0.23022044,"pixelFraction":0.014345874}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":135},{"x":641},{"x":641,"y":903},{"x":135,"y":903}]},"confidence":0.80343187,"importanceFraction":0.9326317}]}}]}'


//INITIAL PART
//LOAD INITIAL IMAGE
if (JSON.parse(gcpResponse1_1)["responses"][0].labelAnnotations[0].description == "NO IMG SELECTED"){
    console.log("NO DATA on gcpResponse1_1");
    chrome.storage.sync.set({ "imgURL": "../assets/project.png", "pText":"Load NFT (right click on image)"}, function(){
        //  A data saved callback omg so fancy
    });
    
}else{
    console.log("DATA on gcpResponse1_1");
}



//LISTENER 'listening' for messages from the client
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.myMessage);
        if (request.myMessage === "auto-fillProperties") {
            openSeaProperties(gcpResponse1_1, request, sender, sendResponse);

        } else if (request.myMessage === "auto-fillLevels") {
            console.log("auto-fillLevels")
            console.log("button2")
            openSeaLevels(gcpResponse1_1, request, sender, sendResponse);

        } else if (request.myMessage === "auto-fillStats") {
            console.log("auto-fillStats")
            openSeaStats(gcpResponse1_1, request, sender, sendResponse);

        } else if (request.myMessage === "urlImgButton") {
            console.log("my img_url<-")
            img_url_config2(request, sender, sendResponse);
            //sendResponse({ status2: "YO!" });
            console.log('new gcpResponse1_1');
            console.log(gcpResponse1_1);


        } else if (request.myMessage === "imgContextMenu") {
            console.log("imgContextMenu")
            //img_url_config2(request, sender, sendResponse);
            //sendResponse({ status2: "YO!" });
            //sendResponse({ status: "Success!" });
            console.log('new gcpResponse1_1');
            console.log(request.urlImg);
            img_url_config2(request, sender, sendResponse);


        } else {
            console.log("I'm at the else of the menu if DUDE!")

        }
        return true;
    }
);

//Inject into 'properties' of OpenSea
function openSeaProperties(gcpResponse1_1, request, sender, sendResponse) {
    try {
        var t = document.querySelector('table');
        var htmlTableList = t.getElementsByTagName("tr");
        var noOfRowsOnTableClient = (htmlTableList.length) - 1;
        //const jsonParsed = JSON.parse(gcpResponse1);
        try { //TRY/CATCH TO HANDLE INPUT DEFAULT VALUE VS api RESPONSE 
            jsonParsed = JSON.parse(gcpResponse1_1);
        } catch {
            //api RESPONSE
            jsonParsed = gcpResponse1_1
        }
        console.log("LOG HERE -><-")
        console.log(jsonParsed["responses"][0].labelAnnotations);
        console.log(jsonParsed["responses"][0].labelAnnotations[0].description);
        console.log("LOG HERE ---><---")
        console.log(request.myMessage)
        htmlTableList[1].querySelector('input[placeholder="Character"]').value = request.custom1Key
        htmlTableList[1].querySelector('input[placeholder="Character"]').dispatchEvent(new Event('input', {
            'bubbles': true
        }))
        htmlTableList[1].querySelector('input[placeholder="Male"]').value = request.custom1Value
        htmlTableList[1].querySelector('input[placeholder="Male"]').dispatchEvent(new Event('input', {
            'bubbles': true
        }))
        htmlTableList[2].querySelector('input[placeholder="Character"]').value = request.custom2Key
        htmlTableList[2].querySelector('input[placeholder="Character"]').dispatchEvent(new Event('input', {
            'bubbles': true
        }))
        htmlTableList[2].querySelector('input[placeholder="Male"]').value = request.custom2Value
        htmlTableList[2].querySelector('input[placeholder="Male"]').dispatchEvent(new Event('input', {
            'bubbles': true
        }))

        sendResponse({ status: "Success!" });
    } catch (error) {
        console.log(error)
        sendResponse({ status: "Exception occurred!" });
    }
}

//Inject into 'levels' of OpenSea
function openSeaLevels(gcpResponse1_1, request, sender, sendResponse) {
    try {
        var t = document.querySelector('table');
        var htmlTableList = t.getElementsByTagName("tr");
        var noOfRowsOnTableClient = (htmlTableList.length) - 1;
        //const jsonParsed = JSON.parse(gcpResponse1);
        console.log('newest gcpResponse1_1')
        console.log(gcpResponse1_1)
        try { //TRY/CATCH TO HANDLE INPUT DEFAULT VALUE VS api RESPONSE 
            jsonParsed = JSON.parse(gcpResponse1_1);
        } catch {
            //api RESPONSE
            jsonParsed = gcpResponse1_1
        }

        console.log("LOG HERE -><-")
        console.log(jsonParsed["responses"][0].labelAnnotations);
        console.log(jsonParsed["responses"][0].labelAnnotations[0].description);
        console.log("LOG HERE ---><---")
        console.log(request.myMessage)
        for (var i = 0; i < noOfRowsOnTableClient; i++) {
            //typeIvalue = Object.keys(jsonParsed)[i]; gcpResponse1
            typeIvalue = jsonParsed["responses"][0].labelAnnotations[i].description;
            nameIvalue = (jsonParsed["responses"][0].labelAnnotations[i].score).toFixed(2);
            htmlTableList[i + 1].querySelector('input[placeholder="Speed"]').value = typeIvalue;//"PUTOS";request.type;
            htmlTableList[i + 1].querySelector('input[placeholder="Speed"]').dispatchEvent(new Event('input', {
                'bubbles': true
            }))
            htmlTableList[i + 1].querySelector('input[placeholder="Min"]').value = parseInt(nameIvalue * 100);//request.name;
            htmlTableList[i + 1].querySelector('input[placeholder="Min"]').dispatchEvent(new Event('input', {
                'bubbles': true
            }))
            htmlTableList[i + 1].querySelector('input[placeholder="Max"]').value = 100
            htmlTableList[i + 1].querySelector('input[placeholder="Max"]').dispatchEvent(new Event('input', {
                'bubbles': true
            }))
            console.log('hey! printing values: ' + i);
            console.log(typeIvalue);
            console.log(nameIvalue)
            //console.log(jsonParsed.Gas);
            //quickstart();
        };
        //enrique2();
        sendResponse({ status: "Success!" });
    } catch (error) {
        console.log(error)
        sendResponse({ status: "Exception occurred!" });
    }
}

//Inject into 'Stats' of OpenSea
function openSeaStats(gcpResponse1_1, request, sender, sendResponse) {
    try {
        var t = document.querySelector('table');
        var htmlTableList = t.getElementsByTagName("tr");
        var noOfRowsOnTableClient = (htmlTableList.length) - 1;
        //const jsonParsed = JSON.parse(gcpResponse1);
        try { //TRY/CATCH TO HANDLE INPUT DEFAULT VALUE VS api RESPONSE 
            jsonParsed = JSON.parse(gcpResponse1_1);
        } catch {
            //api RESPONSE
            jsonParsed = gcpResponse1_1
        }

        var colorList = [];
        percentageList = [];
        sumColorScores = 0;

        for (var i = 0; i < noOfRowsOnTableClient; i++) {
            sumColorScores = sumColorScores + jsonParsed["responses"][0].imagePropertiesAnnotation.dominantColors.colors[i].score;
        }

        console.log("My SUM --->: " + sumColorScores);

        for (var i = 0; i < noOfRowsOnTableClient; i++) {
            perc = jsonParsed["responses"][0].imagePropertiesAnnotation.dominantColors.colors[i].score / sumColorScores;
            //sumColorScores = sumColorScores + jsonParsed["responses"][0].imagePropertiesAnnotation.dominantColors.colors[i].score;
            //perc = perc*100
            percentageList.push(perc);
        }

        console.log("My SUM 2 --->: " + percentageList);

        for (var i = 0; i < noOfRowsOnTableClient; i++) {
            //typeIvalue = Object.keys(jsonParsed)[i]; gcpResponse1
            typeIvalue = jsonParsed["responses"][0].imagePropertiesAnnotation.dominantColors.colors[i];
            myR = jsonParsed["responses"][0].imagePropertiesAnnotation.dominantColors.colors[i].color.red;
            myG = jsonParsed["responses"][0].imagePropertiesAnnotation.dominantColors.colors[i].color.green;
            myB = jsonParsed["responses"][0].imagePropertiesAnnotation.dominantColors.colors[i].color.blue;
            console.log(request.typeIvalue);
            console.log(myR);
            console.log(myG);
            console.log(myB);
            hexColor = rgbToHex(myR, myG, myB);

            nameIvalue = jsonParsed["responses"][0].labelAnnotations[i].score;

            htmlTableList[i + 1].querySelector('input[placeholder="Speed"]').value = hexColor;//"PUTOS";request.type;
            htmlTableList[i + 1].querySelector('input[placeholder="Speed"]').dispatchEvent(new Event('input', {
                'bubbles': true
            }))
            htmlTableList[i + 1].querySelector('input[placeholder="Min"]').value = parseInt(percentageList[i] * 100);//request.name;
            htmlTableList[i + 1].querySelector('input[placeholder="Min"]').dispatchEvent(new Event('input', {
                'bubbles': true
            }))
            htmlTableList[i + 1].querySelector('input[placeholder="Max"]').value = 100
            htmlTableList[i + 1].querySelector('input[placeholder="Max"]').dispatchEvent(new Event('input', {
                'bubbles': true
            }))
            console.log('hey! printing values: ' + i);
            console.log(typeIvalue);
            console.log(nameIvalue)
            //console.log(jsonParsed.Gas);
            //quickstart();
        };
        //enrique2();
        sendResponse({ status: "Success!" });
    } catch (error) {
        console.log(error)
        sendResponse({ status: "Exception occurred!" });
    }
}

//Part of inject into 'properties' of OpenSea
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

//Part of inject into 'properties' of OpenSea
function rgbToHex(r, g, b) {
    console.log("#" + componentToHex(r) + componentToHex(g) + componentToHex(b))
    return "colorRatio:#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

async function img_url_config2(request, sender, sendResponse) {
    try {
        console.log('img_url_config2');
        console.log(request.myMessage);
        console.log(request.urlImg);
        gcpResults = ""
        // sendResponse({ status: "Enrique_Before_while2" });
        // await sendResponse({ status: "Enrique_Before_while2" });

        var jsonGCPresponse = await enrique3_1(request.urlImg)
            .then((data) => {
                console.log("Enrique here 1");
                //console.log(data); // JSON data parsed by `data.json()` call
                gcpResults = data;
            });
        //sendResponse({ status2: "Enrique_Before_while22" });
        console.log(gcpResults);

        validation = gcpResults["responses"][0].hasOwnProperty('error');
        //console.log(validation);
        var imgAPP = document.getElementById("appImage");//.src="https://media.tenor.com/8zaFWYIWrMEAAAAC/black-wheel-red-arrow.gif";
        console.log('imgAPP');
        console.log(imgAPP);
        //imgAPP.src = "https://media.tenor.com/8zaFWYIWrMEAAAAC/black-wheel-red-arrow.gif"
        if (validation == true) {
            //console.log('Some issue');
            var counter = 1;
            chrome.storage.sync.set({ "imgURL": "../assets/waitTIme.gif","pText":"Analyzing asset (this can take a minute)"}, function(){
                //  A data saved callback omg so fancy
            });
            while (validation == true) {
                console.log('in while: ' + counter);
                jsonGCPresponse = await enrique3_1(request.urlImg);
                validation = jsonGCPresponse["responses"][0].hasOwnProperty('error');
                console.log('Response with error: ' + validation);
                if (validation == false) {
                    console.log("AQUI CABRION!");
                    break;
                }
                counter++;
            }
            chrome.storage.sync.set({ "imgURL": request.urlImg ,"pText":"Asset loaded"}, function(){
                //  A data saved callback omg so fancy
            });

            //THIS IS YOUR RETuRN
            //sendResponse({ status: "Enrique_Before_while2" });
            console.log("Esto es lo que estamos pasando!");
            console.log(jsonGCPresponse);
            gcpResponse1_1 = jsonGCPresponse;
            sendResponse({ status: "END_IMG_GET" });
            console.log('End while');
            //return jsonGCPresponse;
            return true;
        } else {
            console.log('Not issue on the first call');
            gcpResponse1_1 = jsonGCPresponse;
            chrome.storage.sync.set({ "imgURL": request.urlImg,"pText":"Asset loaded" }, function(){
                //  A data saved callback omg so fancy
            });
            sendResponse({ status: "END_IMG_GET" });
        }

    } catch (error) {
        sendResponse({ status: "Error" });
    }
}

//-------------

async function enrique() {
    console.log("hi mother fucker")
    fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}


//const jsonBody = '{"requests":[{"image":{"source":{"imageUri":"https://cdn.shopify.com/s/files/1/0606/6559/3995/files/IMG_1105.png"}},"features":[{"type":"LABEL_DETECTION","maxResults":11}]}]}'
async function enrique2(url) {
    jsonBody = '{"requests":[{"image":{"source":{"imageUri":"' + url + '"}},"features":[{"type":"LABEL_DETECTION","maxResults":11},{"type":"IMAGE_PROPERTIES","maxResults":11}]}]}'
    //jsonBody = '{"requests":[{"image":{"source":{"imageUri":"https://i.seadn.io/gae/7RFPO1KBsDzyfPGTpFquHl35MRt8Xkuk-5OqNi_C-Kcu42_arG9KuMx3NQn9ueZ7123CXIn-spcK6t66EEVjBka8_1eF8JKWarlu"}},"features":[{"type":"LABEL_DETECTION","maxResults":11},{"type":"IMAGE_PROPERTIES","maxResults":11}]}]}'
    console.log("hi mother fucker 2 - @enrique2()")
    fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDUYrOx0r7spBBltBDthXu_zwWzk2LKUA4', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: jsonBody,
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}

async function enrique3(url) {
    jsonBody = '{"requests":[{"image":{"source":{"imageUri":"' + url + '"}},"features":[{"type":"LABEL_DETECTION","maxResults":11},{"type":"IMAGE_PROPERTIES","maxResults":11}]}]}'
    //jsonBody = '{"requests":[{"image":{"source":{"imageUri":"https://i.seadn.io/gae/7RFPO1KBsDzyfPGTpFquHl35MRt8Xkuk-5OqNi_C-Kcu42_arG9KuMx3NQn9ueZ7123CXIn-spcK6t66EEVjBka8_1eF8JKWarlu"}},"features":[{"type":"LABEL_DETECTION","maxResults":11},{"type":"IMAGE_PROPERTIES","maxResults":11}]}]}'
    console.log("hi mother fucker 3 - @enrique3()")
    myresults = ""
    fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDUYrOx0r7spBBltBDthXu_zwWzk2LKUA4', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: jsonBody,
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response));
            myresults = JSON.stringify(response);
        })
    return myresults;
}

async function enrique3_1(url = '') {
    // Default options are marked with *
    jsonBody = '{"requests":[{"image":{"source":{"imageUri":"' + url + '"}},"features":[{"type":"LABEL_DETECTION","maxResults":15},{"type":"IMAGE_PROPERTIES","maxResults":15}]}]}'
    const response = await fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDUYrOx0r7spBBltBDthXu_zwWzk2LKUA4', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Accept': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: jsonBody // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

// postData('https://example.com/answer', { answer: 42 })
//     .then((data) => {
//         console.log(data); // JSON data parsed by `data.json()` call
//     });