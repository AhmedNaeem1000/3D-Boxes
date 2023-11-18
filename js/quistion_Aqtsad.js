 


// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "أذا كان التحليل يتم علي أساس دراسة ظاهرة اقتصادية تتعلق بسلوك المستهلك فأن هذا التحليل يعد تحليلا جزئيا.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 2,
  question: "أذا كان التحليل يدور حول دراسة مايتعلق بادخل القومي فأن هذا التحليل يعد تحليلا كليا.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 3,
  question: "أي كمية أقتصادية قابلة للتغير بالزيادة أو النقصان كالدخل والأستهلاك والأدخار والأستثمار.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 4,
  question: "الأقتصاد الجزئي يهتم بدراسة ظواهر الأقتصادية علي المستوي القومي",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 5,
  question: "الأقتصاد الكلي هو فرع من علوم الأقتصاد الذي يهتم بدراسة سلوك الأقتصادي للوحدة الأقتصادية",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 6,
  question: "يعبر الرصيد عن تحديد وقياس كمية الناتج القومي في لحظة معينة مجردة عن الزمن.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 7,
  question: "التدفق يعني قياس تيار الدخل القومي خلال الزمن.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 8,
  question: "يعبر التوازن عن عدم حدوث تعادل بين القوي المتعارضة.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 9,
  question: "الأقتصاد الكلي يهتم بالتحليل العام.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 10,
  question: "يعبر الأختلال عن الحالة التي يحدث فيها التوازن أو التعادل بين القوي المتعارضة.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 11,
  question: "الدخل هو خدمة أو منفعة ناتجة عن رأس المال.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 12,
  question: "الأقتصاد الجزئي يهتم بالتحليل الخاص.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 13,
  question: "عندما يكون العرض الكلي أقل من الطلب الكلي يترتب علي ذالك حدوث توازن.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 14,
  question: "التضخم هو أنخفاض في المستوي العام لأسعار السلع والخدمات.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 15,
  question: "المحقق هو الشئ الذي تحقق فعلا.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 16,
  question: "عندما يكون الطلب الكلي أقل من العرض الكلي يترتب علي تلك الحالة حدوث خلل.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 17,
  question: "المتوقع هو الشئ الذي يتوقع حدوثه في المستقبل.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 18,
  question: "عندما يكون الطلب الكلي يساوي العرض الكلي يترتب علي تلك الحالة حدوث خلل.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 19,
  question: "فرع من فروع علم الأقتصاد يهتم بدراسة السلوك الأقتصادي للوحدة الأقتصادية",
  answer:"الأقتصاد الجزئي",

  options: [
    "الأقتصاد الجزئي",
    "الأقتصاد الكلي",
    "الدخل القومي",
    "لا شئ مماسبق",
  
  ]
},
{
  numb: 20,
  question: "يهتم بدراسة الظواهر الأقتصادية علي المستوي القومي.",
  answer:"الأقتصاد الكلي",

  options: [
    "الأقتصاد الجزئي",
    "الأقتصاد الكلي",
    "الدخل القومي",
    "لا شئ مماسبق",
  ]
},
{
  numb: 21,
  question: "عندما يكون العرض الكلي أقل من الطلب الكلي يترتب علي تلك الحالة تعرض الأقتصاد القومي لحالة من...",
  answer:"أ , ب",

  options: [
    "التضخم",
    "الخلل",
    "التوازن",
    "أ , ب",
  
  ]
},
{
  numb: 22,
  question: "عندما الطلب الكلي أقل من العرض الكلي يترتب علي تلك الحالة تعرض الأقتصاد القومي لحالة من",
  answer:"ب , ج",
  options: [
    "التضخم",
    "الخلل",
    "الكساد",
    "ب , ج",
  
  ]
},
{
  numb: 23,
  question:"عندما الطلب الكلي مساويل للعرض الكلي يترتب علي تلك الحالة تعرض الأقتصاد القومي لحالة من",
  answer:"التوازن",

  options: [
    "التضخم",
    "الخلل",
    "الكساد",
    "التوازن",
  
  ]
},

{
  numb: 24,
  question: "الدخل القومي والناتج القومي وجهان لعملة واحدة",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 25,
  question: "الناتج القومي الأجمالي هو القيمة النهائية للسلع والخدمات المنتجة أثناء عام كامل بواسطة وسائل الأنتاج المملوكة المملوكة من قبل أبناء هذا البلد حتي لو كان خارج حدودها",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 26,
  question: "الناتج القومي يتكون بدوره من شقين هما أنتاج سلع أستهلاكية وأنتاج سلع أستثمارية",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 27,
  question: "عناصر عوامل الأنتاج العمل والأرض ورأس المال والتنظيم.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 28,
  question: "عائد العمل الأجور والمرتبات",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 29,
  question: "تعد سلعة الخبز سلعة نهائية ولكي تكون في صورتها النهائية فأنها تمر بعدة مراحل",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 30,
  question: "الدخل القومي هو عبارة عن دخول عوامل الأنتاج التي ساهمت في تكوين الأنتاج خلال فترة زمنية ولتكن سنة",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 31,
  question: "الأنفاق يشمل شقين هما الأنفاق الحكومي والأنفاق الخاص",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 32,
  question: "عائد التنظيم الفوائد",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 33,
  question: "عائد الأرض الريع أو الأيجار",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 34,
  question: "عائد رأس المال الربح أو الخسارة",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 35,
  question: "الأنفاق القومي هو مجموع ماينفقه الأفراد من الأموال علي السلع الأستهلاكية والسلع الأستثمارية",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 36,
  question: "الأنفاق علي الأسثمار يهدف الي شراء سلع وخدمات تستخدم للأستهلاك المباشر",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 37,
  question: "الأنفاق علي الأحلال والتجديد يهدف الي صيانة بعض السلع والرأسمالية وتطويرها أو أستبدالها بسلعة أخري",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 38,
  question: "الأنفاق علي الأستهلاك يهدف الي شراء سلع رأسمالية أو القيام بالأنفاق علي سلع رأسمالية كالمباني والطرق والكباري.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
{
  numb: 39,
  question: "من أهمية دراسة الناتج القومي معرفة مدي نجاح السياسات الأقتصادية.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 18
{
  numb: 40,
  question: "يمكن من خلال دراسة الدخل القومي معرفة مدي عدالة توزيعه علي عناصر الأنتاج",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 19
{
  numb:41,
  question: "يتم دراسة الدخل القومي للمقارنة بين دولة وأخري من حيث التقدم والرفاهية الأقتصادية",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 20
{
  numb: 42,
  question: "من المشاكل التي تواجهنا عند قياس الدخل القومي أزدواج الحساب وعدم توافر ودقة الأحصاءات",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 21
{
  numb: 43,
  question: "من العوامل التي يتوقف عليها الأنتاج القومي حجم الموارد الأقتصادية المتاحة ونوعيتها",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 1
{
  numb: 44,
  question: "الأنفاق ينقسم الي :-",
  answer:"كل ماسبق",
  options: [
    "الأنفاق علي الأستهلاك",
    "الأنفاق علي الأستثمار",
    "الأنفاق علي الأحلال والتجديد",
    "كل ماسبق",
  
  ]
},
// 2
{
  numb: 45,
  question: "مقياس لجميع أنشطة الأنتاج التي يقوم بها مواطنو الدولة حتي لو كانوا خارج حدودها",
  answer:"الناتج القومي الأجمالي",
  options: [
    "الناتج القومي الأجمالي",
    "الناتج المحلي الأجمالي",
    "الدخل القومي",
    "الأنفاق القومي",
  
  ]
},
// 3
{
  numb: 46,
  question: "مقياس لجميع أنشطة الأنتاج داخل حدود البلد",
  answer:"الناتج المحلي الأجمالي",
  options: [
    "الناتج القومي الأجمالي",
    "الناتج المحلي الأجمالي",
    "الدخل القومي",
    "الأنفاق القومي",
  
  ]
},
// 4
{
  numb: 44,
  question: "يمكن قياس الدخل القومي بأكثر من طريقة ومن ذالك",
  answer:"جميع ماسبق",
  options: [
    "طريقة الناتج من السلع النهائية والخدمات",
    "طريقة الدخل",
    "طريقة الأنفاق",
    "جميع ماسبق",
  
  ]
},
// 5
{
  numb: 45,
  question: "عبارة عن المبالغ التي تدفعها الدولة للأفراد دون مقابل",
  answer:"المدفوعات التحويلية",
  options: [
    "المدفوعات التحويلية",
    "الأرباح الأستثنائية",
    "الخدمات غير النقدية",
    "الأعانات الأنتاجية",
  
  ]
},
// 6
{
  numb: 46,
  question: "طرق توزيع الدخل القومي",
  answer:"أ , ب",
  options: [
    "التوزيع الوظيفي",
    "التوزيع الشخصي",
    "التوزيع الحكومي",
    "أ , ب",
  
  ]
},


// 1
{
  numb: 47,
  question:"الأستهلاك هو عملية استهلاك سلعة أو خدمة بهدف أشباع حاجة عند الأنسان بشكل مباشر",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 2
{
  numb: 48,
  question:"يمثل الأنفاق الأستهلاكي الخاص نسبة مرتفعة من الناتج المحلي الأجمالي.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 3
{
  numb: 49,
  question:"يشمل القطاع الأستهلاكي الخاص الأفراد الطبيعين بصفتهم مدخرين.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 4
{
  numb: 50,
  question:"يتم الحصول علي أجمالي الأنفاق الأستهلاكي الخاص بعدة أساليب منها تدفق السلع.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 5
{
  numb: 51,
  question:"توجد علاقة طردية بين الدخل المتاح و الأستهلاك.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 6
{
  numb: 52,
  question:"الزيادة في الدخل تنفق كلها علي الأستهلاك.",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 7
{
  numb: 53,
  question:"الميل الحدي للأدخار أكبر من الصفر وأقل من الواحد.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 8
{
  numb: 54,
  question:"مجموع كل من الميل الحدي للأستهلاك والميل الحدي للأدخار يساوي واحدا صحيحا",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 9
{
  numb: 55,
  question:"الميل الحدي للأستهلاك عند الفقراء أكبر من ميل الأغنياء.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 10
{
  numb: 56,
  question:"الميل المتوسط للأدخار عند الفقراء يكون أقل من الميل التوسط للأدخار عند الأغنياء.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 11
{
  numb: 57,
  question:"يشمل الأنفاق الأستهلاكي.",
  answer:"جميع ماسبق",

  options: [
    "السلع المعمرة",
    "السلع غير المعمرة",
    "سلع الخدمات",
    "جميع ماسبق",
  
  ]
},
// 2
{
  numb: 58,
  question:"الثلاجات والسيارات والأثاث هي أستهلاك السلع.",
  answer:"المعمرة",
  options: [
    "المعمرة",
    "غير المعمرة",
    "الخدمات",
    "لا شئ مماسبق",
  
  ]
},
// 3
{
  numb: 59,
  question:"هو عبارة عن نسبة الأستهلاك الي الدخل المتاح.",
  answer:"الميل المتوسط للأستهلاك",
  options: [
    "الميل المتوسط للأستهلاك",
    "الميل المتوسط للأدخار",
    "الميل الحدي للأستهلاك",
    "الميل الحدي للأدخار",
  
  ]
},
// 4
{
  numb: 60,
  question:"هو عبارة عن نسبة الأدخار الي الدخل المتاح.",
  answer:"الميل المتوسط للأدخار",
  options: [
    "الميل المتوسط للأستهلاك",
    "الميل المتوسط للأدخار",
    "الميل الحدي للأستهلاك",
    "الميل الحدي للأدخار",
  
  ]
},
// 5
{
  numb: 61,
  question:"مجموع الميل المتوسط للأستهلاك والميل المتوسط للأدخار",
  answer:"يساوي واحد صحيح",
  options: [
    "يساوي واحد صحيح",
    "لا يساوي واحد صحيح",
    "أكبر من الواحد",
    "أقل من الواحد",
  
  ]
},
// 6
{
  numb:62,
  question:"هو الأستهلاك الذي يتغير مع تغير الدخل",
  answer:"استهلاك تبعي",
  options: [
    "استهلاك تبعي",
    "استهلاك تلقائي",
    "الأستهلاك القومي",
    "لا شئ مماسبق",
  
  ]
},
// 7
{
  numb: 63,
  question:"التغير في حجم الأستهلاك الناجم عن تغير الدخل بوحدة واحدة يسمي",
  answer:"الميل الحدي للأستهلاك",
  options: [
    "الميل الحدي للأستهلاك",
    "الميل الحدي للأدخار",
    "الميل المتوسط للأستهلاك",
    "الميل الحدي للأدخار",
  
  ]
},
// 8
{
  numb: 64,
  question:"وكذلك فأن التغير في حجم الأدخار الناجم عن تغير الدخل بوحدة واحدة يسمي",
  answer:"الميل الحدي للأدخار",
  options: [
    "الميل الحدي للأستهلاك",
    "الميل الحدي للأدخار",
    "الميل المتوسط للأستهلاك",
    "الميل المتوسط للأدخار",
  
  ]
},
// 9
{
  numb: 65,
  question:"هو الأستهلاك الذي لا يعتمد علي الدخل ولا يتأثر به.",
  answer:"أستهلاك تلقائي",
  options: [
    "أستهلاك تبعي",
    "أستهلاك تلقائي",
    "الأستهلاك القومي",
    "لا شئ مماسبق",
  
  ]
},
// 10
{
  numb: 66,
  question:"من العوامل الأخري المؤثرة علي الأستهلاك",
  answer:"جميع ماسبق",
  options: [
    "حجم الثروة",
    "معدل التضخم المتوقع",
    "عنصر المحاكاة والعادات والتقاليد",
    "جميع ماسبق",
  
  ]
},
// 11
{
  numb:67,
  question:"نسبة تغير الأستهلاك أقل من نسبة الدخل , فهذا يعني أن الميل الحدي للأستهلاك",
  answer:"موجب وأقل من الواحد",

  options: [
    "موجب وأقل من الواحد",
    "سالب وأقل من الواحد",
    "موجب وأكبر من الواحد",
    "سالب وأكبر من الواحد",
  
  ]
},
// 1
{
  numb: 68,
  question:"يمثل الأنفاق الأستثماري مكون هام في الأنفاق الكلي من أجل أنتاج سلع والمعدات الرأسمالية",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 2
{
  numb: 69,
  question:"يعتمد الأستثمار علي عدد من المتغيرات الأقتصادية التي تؤثر علي الأستثمار سلبا أو أيجابا",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 3
{
  numb: 70,
  question:"السياسات المالية للحكومة هي المحدد الأساسي لحجم الأنفاق الحكومي.",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 4
{
  numb: 71,
  question:"الأنفاق الحكومي يتأثر بمستوي الدخل",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 5
{
  numb: 72,
  question:"صافي الأنفاق الخارجي يتكون من الصادرات مضافا للوردات",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 6
{
  numb: 73,
  question:"كلما زاد حجم الصادرات زاد حجم الطلب الكلي",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 7
{
  numb: 74,
  question:"تعتمد دالة الواردات علي متغيرات خارجية ومتغيرات اقتصادية محلية",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 8
{
  numb: 75,
  question:"كلما زاد الدخل زاد ححم الواردات",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 9
{
  numb: 76,
  question:"حجم الصادرات هو مقدار ثابت ومعطي لا يعتمد علي الدخل أو العناصر الأخري",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 10
{
  numb: 77,
  question:"الميزان التجاري يكون متوازنا عندما الصادرات السلعية تساوي الواردات السلعية",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 11
{
  numb: 78,
  question:"كلما أنخفض سعر الفائدة, أرتفعت تكلفة الأقتراض",
  answer:"خطأ",
  options: [
    "صح",
    "خطأ",
  
  ]
},
// 12
{
  numb: 79,
  question:"تتشكل الصادرات الجزء المخصص من الأنتاج المحلي للتصدير من قبل المنتجين المحليين المقيمين في الأقتصاد المحلي",
  answer:"صح",
  options: [
    "صح",
    "خطأ",
  
  ]
},


{
  numb: 80,
  question:"يمثل أجمالي قيمة المعدات والسلع الرأسمالية في المجتمع خلال سنة",
  answer:"الأستثمار الأجمالي",
  options: [
    "الأستثمار الأجمالي",
    "الأستثمار الصافي",
    "الأستثمار السكاني",
    "لا شئ مماسبق",
  
  ]
},
// 2
{
  numb: 81,
  question:"يساوي الأستثمار الأجمالي مطروحا منه قيمة أهلاك رأس المال الثابت الذي يستهلك أثناء العملية الأنتاجية خلال سنة",
  answer:"الأستثمار الصافي",
  options: [
    "الأستثمار المحلي",
    "الأستثمار الصافي",
    "الأستثمار السكاني",
    "لا شئ مماسبق",
  
  ]
},
// 3
{
  numb: 82,
  question:"من مكونات الأنفاق الأستثماري",
  answer:"جميع ماسبق",
  options: [
    "تكوين رأس المال الثابت",
    "التغير في المخزون",
    "الأستثمار السكاني",
    "جميع ماسبق",
  
  ]
},
// 4
{
  numb: 83,
  question:"عندما ترغب الحكومة في زيادة معدل النمو الأقتصادي تسمي هذه السياسات ب...",
  answer:"السياسات المالية التوسعية",
  options: [
    "السياسات المالية التوسعية",
    "السياسات المالية الأنكماشية",
    "السياسات الأقتصادية",
    "لا شئ مماسبق",
  
  ]
},
// 5

{
  numb: 84,
  question:"عندما ترغب الحكومة في محاربة التضخم وتحقيق أستحقاق الأسعار هذه السياسات تسمي ب",
  answer:"السياسات المالية الأنكماشية",
  options: [
    "السياسات المالية التوسعية",
    "السياسات المالية الأنكماشية",
    "السياسات الأقتصادية",
    "لا شئ مماسبق",
  
  ]
},
// 6
{
  numb: 85,
  question:"تعتمد علي متغيرات خارجية ومتغيرات أقتصادية محلية",
  answer:"دالة الصادرات",
  options: [
    "دالة الصادرات",
    "دالة الواردات",
    "دالة الأنفاق الحكومي",
    "لا شئ مماسبق",
  
  ]
},
// 7
{
  numb: 86,
  question:"تمثل تسربا من الدخل الي الخارج لشراء السلع والخدمات التي لا تنتج محليا",
  answer:"الواردات",
  options: [
    "الواردات",
    "الصادرات",
    "صافي الأنفاق الخارجي",
    "الأنفاق الأستثماري",
  
  ]
},




];




// Shuffle questions array
questions.sort(function() {
  return 0.5 - Math.random();
});

// Select the first 30 questions
questions = questions.slice(0, 30);

