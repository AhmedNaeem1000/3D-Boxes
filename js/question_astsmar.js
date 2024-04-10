
// creating an array and passing the number, questions, options, and answers
let questions = [
  // التحليل الاساسي
  // 1
  {
  numb: 1,
  question: "يقوم......بمحاولة تحديد قيمة المنظمة عبر تحليل البيانات المالية من تقريرها السنوي وباستخدام بيانات أخري نوعية عن المنظمة وفي المحيط الذي تعمل فيه,من تقريرها السنوي وبأستخدام بيانات اخري نوعية عن المنظمة وفي المحيط الذي تعمل فيه, وغالبا ماتعرف قيمة المنظمة وفي المحيط الذي تعمل فيه, وغالبا ماتعرف قيمة المنظمة علي أنها 'قيمة جوهرية'",
  answer:"التحليل الأساسي",
  options: [
    "التحليل الأساسي",
    "التحليل الكمي",
    "التحليل النوعي",
    "التحليل الفني",
  
  ]
},
  // 2
  {
    numb: 2,
    question: "هو دراسة الأتجاه الماضي لسعر السهم وكمية تداوله لمحاولة التنبؤ باتجاهه المستقبلي ويتم تحويل تغيرات الأسعار الي مخططات بيانية تربط السعر بالزمن,ويستعمل بشكل واسع بين المتداولين ومحترفي المضاربة.",
    answer:      "التحليل الفني",
    options: [
      "التحليل الأساسي",
      "التحليل الكمي",
      "التحليل النوعي",
      "التحليل الفني",
    
    ]
  },
  // 3
  {
    numb: 3,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
  // 1
  {
    numb: 1,
    question: "",
    answer:"",
    options: [
      "",
      "",
      "",
      "",
    
    ]
  },
                                  
];

// Shuffle questions array
questions.sort(function() {
  return 0.5 - Math.random();
});



// Select the first 30 questions
questions = questions.slice(0, 30);

