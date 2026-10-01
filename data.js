export const examData = [
  // --- PHẦN 1: TRẮC NGHIỆM (12 CÂU) ---
  {
    id: "p1_1",
    part: 1,
    question: "Hàm số $y = \\sin x$ tuần hoàn với chu kỳ bao nhiêu?",
    options: [
      "$\\pi$",
      "$2\\pi$",
      "$3\\pi$",
      "$4\\pi$"
    ],
    correctAnswer: 1,
    explanation: "Hàm số $y = \\sin x$ tuần hoàn với chu kỳ $2\\pi$."
  },
  {
    id: "p1_2",
    part: 1,
    question: "Giá trị nào dưới đây của $x$ là một nghiệm của phương trình $\\tan x = \\sqrt{3}$?",
    options: [
      "$x = \\frac{\\pi}{6}$",
      "$x = \\frac{\\pi}{4}$",
      "$x = \\frac{\\pi}{3}$",
      "$x = \\frac{\\pi}{2}$"
    ],
    correctAnswer: 2,
    explanation: "Ta có $\\tan x = \\sqrt{3} \\Leftrightarrow x = \\frac{\\pi}{3} + k\\pi$. Thay $k = 0$ ta được $x = \\frac{\\pi}{3}$."
  },
  {
    id: "p1_3",
    part: 1,
    question: "Mệnh đề nào dưới đây đúng?",
    options: [
      "$\\cos x + \\cos y = 2 \\cos \\frac{x+y}{2} \\cos \\frac{x-y}{2}$",
      "$\\cos x + \\cos y = 2 \\sin \\frac{x+y}{2} \\sin \\frac{x-y}{2}$",
      "$\\cos x + \\cos y = -2 \\cos \\frac{x+y}{2} \\cos \\frac{x-y}{2}$",
      "$\\cos x + \\cos y = -2 \\sin \\frac{x+y}{2} \\sin \\frac{x-y}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Theo công thức biến đổi tổng thành tích: $\\cos x + \\cos y = 2 \\cos \\frac{x+y}{2} \\cos \\frac{x-y}{2}$."
  },
  {
    id: "p1_4",
    part: 1,
    question: "Trong các đẳng thức sau đây, đẳng thức nào đúng?",
    options: [
      "$\\sin (180^\\circ - \\alpha) = -\\sin \\alpha$",
      "$\\cos (180^\\circ - \\alpha) = \\cos \\alpha$",
      "$\\tan (180^\\circ - \\alpha) = \\tan \\alpha$",
      "$\\cot (180^\\circ - \\alpha) = -\\cot \\alpha$"
    ],
    correctAnswer: 3,
    explanation: "Hai góc bù nhau thì sin bằng nhau, còn cos, tan, cot đối nhau."
  },
  {
    id: "p1_5",
    part: 1,
    question: "Nghiệm của phương trình $\\cot x = -\\sqrt{3}$ là",
    options: [
      "$x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$",
      "$x = -\\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$",
      "$x = -\\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$"
    ],
    correctAnswer: 3,
    explanation: "$\\cot x = -\\sqrt{3} \\Leftrightarrow \\cot x = \\cot\\left(-\\frac{\\pi}{6}\\right) \\Leftrightarrow x = -\\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$."
  },
  {
    id: "p1_6",
    part: 1,
    question: "Khẳng định nào sau đây đúng?",
    options: [
      "$\\sin 2x = \\sin x \\cos x$",
      "$\\cos 2x = 2 \\cos^2 x - 1$",
      "$\\cos 2x = 2 \\sin^2 x - 1$",
      "$\\sin 2x = 2 \\sin x$"
    ],
    correctAnswer: 1,
    explanation: "Theo công thức nhân đôi: $\\cos 2x = 2 \\cos^2 x - 1$."
  },
  {
    id: "p1_7",
    part: 1,
    question: "Góc có số đo $80^\\circ$ đổi sang đơn vị radian bằng",
    options: [
      "$\\frac{5\\pi}{9}$",
      "$\\frac{\\pi}{9}$",
      "$\\frac{2\\pi}{9}$",
      "$\\frac{4\\pi}{9}$"
    ],
    correctAnswer: 3,
    explanation: "$80^\\circ = 80 \\cdot \\frac{\\pi}{180} = \\frac{4\\pi}{9}$ rad."
  },
  {
    id: "p1_8",
    part: 1,
    question: "Cho hàm số $y = \\cos x$. Khẳng định nào dưới đây sai?",
    options: [
      "Tập xác định của hàm số là $D = \\mathbb{R}$",
      "Hàm số tuần hoàn với chu kỳ $\\pi$",
      "Hàm số chẵn",
      "Tập giá trị của hàm số là $[-1; 1]$"
    ],
    correctAnswer: 1,
    explanation: "Hàm số $y = \\cos x$ tuần hoàn với chu kỳ $2\\pi$, do đó khẳng định chu kỳ $\\pi$ là sai."
  },
  {
    id: "p1_9",
    part: 1,
    question: "Cho góc lượng giác $\\alpha$, biết $\\frac{\\pi}{2} < \\alpha < \\pi$. Khẳng định nào sai?",
    options: [
      "$\\sin \\alpha > 0$",
      "$\\cot \\alpha < 0$",
      "$\\tan \\alpha < 0$",
      "$\\cos \\alpha > 0$"
    ],
    correctAnswer: 3,
    explanation: "Vì $\\alpha$ thuộc góc phần tư thứ II nên $\\cos \\alpha < 0$. Do đó $\\cos \\alpha > 0$ là sai."
  },
  {
    id: "p1_10",
    part: 1,
    question: "Công thức nghiệm của phương trình $\\sin x = \\sin \\alpha$ là",
    options: [
      "$\\begin{bmatrix} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{bmatrix}, k \\in \\mathbb{Z}$",
      "$\\begin{bmatrix} x = \\alpha + k2\\pi \\\\ x = \\pi + \\alpha + k2\\pi \\end{bmatrix}, k \\in \\mathbb{Z}$",
      "$x = \\pm \\alpha + k2\\pi, k \\in \\mathbb{Z}$",
      "$x = \\pm \\alpha + k\\pi, k \\in \\mathbb{Z}$"
    ],
    correctAnswer: 0,
    explanation: "Nghiệm của phương trình $\\sin x = \\sin \\alpha$ là $x = \\alpha + k2\\pi$ hoặc $x = \\pi - \\alpha + k2\\pi$ ($k \\in \\mathbb{Z}$)."
  },
  {
    id: "p1_11",
    part: 1,
    question: "Rút gọn biểu thức $A = 2 \\sin 2x \\cos 3x - \\sin 5x$",
    options: [
      "$2 \\sin 5x$",
      "$\\cos x$",
      "$-\\cos 5x$",
      "$-\\sin x$"
    ],
    correctAnswer: 3,
    explanation: "$A = (\\sin 5x + \\sin(-x)) - \\sin 5x = \\sin 5x - \\sin x - \\sin 5x = -\\sin x$."
  },
  {
    id: "p1_12",
    part: 1,
    question: "Phương trình $x^2 = 4x$ tương đương với phương trình nào dưới đây?",
    options: [
      "$x^2 + 4x = 0$",
      "$x^2 + \\sqrt{x - 2} = 4x + \\sqrt{x - 2}$",
      "$x^2 + \\sqrt{x + 3} = 4x + \\sqrt{x + 3}$",
      "$x^2 + \\frac{1}{x} = 4x + \\frac{1}{x}$"
    ],
    correctAnswer: 2,
    explanation: "Tập nghiệm của $x^2 = 4x$ là $\\{0; 4\\}$. Điều kiện $x+3 \\geq 0 \\Leftrightarrow x \\geq -3$ thỏa mãn với cả 2 nghiệm. Do đó 2 phương trình tương đương."
  },

  // --- PHẦN 2: ĐÚNG SAI (4 CÂU) ---
  {
    id: "p2_1",
    part: 2,
    question: "Từ một vị trí ban đầu trong không gian, vệ tinh $X$ chuyển động theo quỹ đạo là một đường tròn quanh trái đất và luôn cách tâm trái đất một khoảng bằng $9200km$. Sau $2$ giờ thì vệ tinh $X$ hoàn thành hết một vòng di chuyển. Các mệnh đề sau đúng hay sai?",
    statements: [
      { text: "Quãng đường vệ tinh $X$ chuyển động được sau $1$ giờ xấp xỉ $28902,65 (km)$.", correct: true },
      { text: "Quãng đường vệ tinh $X$ chuyển động được sau $1,5$ giờ xấp xỉ $43353,98 (km)$.", correct: true },
      { text: "Sau khoảng $5,3$ giờ thì $X$ di chuyển được quãng đường $240000 km$.", correct: false },
      { text: "Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau $4,5$ giờ thì quỹ đạo chuyển động của vệ tinh thu được một góc $\\frac{9\\pi}{2} rad$.", correct: true }
    ],
    explanation: "Chu vi quỹ đạo $C = 2\\pi \\cdot 9200 \\approx 57805,3 km$. $1$ vòng tốn $2$ giờ. Vận tốc: $\\pi \\cdot 9200 \\approx 28902,65 km/h$. Trong $1,5$ giờ được $1.5 \\cdot 28902.65 = 43353.98 km$. Góc quay trong $4,5$ giờ: $(4.5 / 2) \\cdot 2\\pi = 4.5\\pi = \\frac{9\\pi}{2}$."
  },
  {
    id: "p2_2",
    part: 2,
    question: "Cho $\\sin \\alpha = \\frac{1}{3}$ và $\\frac{\\pi}{2} < \\alpha < \\pi$. Mệnh đề sau đúng hay sai:",
    statements: [
      { text: "$\\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha$.", correct: true },
      { text: "$\\cos \\alpha = \\frac{2\\sqrt{2}}{3}$.", correct: false },
      { text: "$\\tan 2\\alpha = -\\frac{4\\sqrt{2}}{7}$.", correct: true },
      { text: "$\\tan\\left(\\alpha - \\frac{\\pi}{4}\\right) = \\frac{9 - 4\\sqrt{2}}{7}$.", correct: false }
    ],
    explanation: "Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ nên $\\cos \\alpha < 0 \\Rightarrow \\cos \\alpha = -\\sqrt{1 - (1/3)^2} = -\\frac{2\\sqrt{2}}{3}$. Suy ra mệnh đề b sai."
  },
  {
    id: "p2_3",
    part: 2,
    question: "Cho hàm số $y = f(x) = \\cos 2x + \\cos x$. Xét tính đúng - sai của các phát biểu sau:",
    statements: [
      { text: "Tập xác định của hàm số trên là $\\mathbb{R}$.", correct: true },
      { text: "Hàm số trên là hàm số chẵn.", correct: true },
      { text: "Đặt $t = \\cos x$ thì hàm số trở thành $y = f(t) = 2t^2 + t - 1$.", correct: true },
      { text: "Giá trị nhỏ nhất của hàm số $y = f(x)$ là $0$.", correct: false }
    ],
    explanation: "Hàm số $f(x) = \\cos 2x + \\cos x = 2\\cos^2 x - 1 + \\cos x = 2t^2 + t - 1$ với $t = \\cos x \\in [-1; 1]$. Giá trị nhỏ nhất là $-\\frac{\\Delta}{4a} = -\\frac{1 - 4(2)(-1)}{8} = -\\frac{9}{8}$ khi $t = -\\frac{1}{4}$. Do đó GTNN không phải là 0."
  },
  {
    id: "p2_4",
    part: 2,
    question: "Cho phương trình $\\frac{\\sin x}{1 - \\cos x} = 0$.",
    statements: [
      { text: "Tập xác định của hàm số $y = \\frac{\\sin x}{1 - \\cos x}$ là $D = \\mathbb{R} \\setminus \\{k2\\pi, k \\in \\mathbb{Z}\\}$.", correct: true },
      { text: "Hàm số $y = \\frac{\\sin x}{1 - \\cos x}$ có chu kì tuần hoàn là $T = \\pi$.", correct: false },
      { text: "Phương trình $\\sin x = 0$ có tập nghiệm là $S = \\{k\\pi, k \\in \\mathbb{Z}\\}$.", correct: true },
      { text: "Số điểm biểu diễn nghiệm của phương trình $\\frac{\\sin x}{1 - \\cos x} = 0$ trên đường tròn lượng giác là $2$.", correct: false }
    ],
    explanation: "Điều kiện $\\cos x \\neq 1 \\Leftrightarrow x \\neq k2\\pi$. $\\sin x = 0 \\Leftrightarrow x = k\\pi$. Kết hợp điều kiện ta được $x = \\pi + k2\\pi$. Số điểm biểu diễn trên đường tròn lượng giác chỉ là 1 điểm."
  },

  // --- PHẦN 3: TRẢ LỜI NGẮN (6 CÂU) ---
  {
    id: "p3_1",
    part: 3,
    question: "",
    image: "img/anh-cau1-phan3.png",
    correctAnswer: "1979",
    explanation: "Bánh xe quay 30 vòng trong 8 giây. Sau 4 phút (240s) quay được $(30/8) \\cdot 240 = 900$ vòng. Quãng đường $= 900 \\cdot 2\\pi \\cdot 0.35 \\approx 1979$ (mét)."
  },
  {
    id: "p3_2",
    part: 3,
    question: "",
    image: "img/anh-cau2-phan3.png",
    correctAnswer: "1100",
    explanation: "Sau khi tính toán, ta có $a = 28$, $b = 205$. Suy ra $10a + 4b = 10(28) + 4(205) = 280 + 820 = 1100$."
  },
  {
    id: "p3_3",
    part: 3,
    question: "Huyết áp của một người được cho thông qua hàm số $p(t) = 120 + 30\\sin(160\\pi t)$, trong đó $p(t)$ là huyết áp tính bằng mmHg tại thời điểm $t \\geq 0$ tính bằng phút. Huyết áp tối đa và huyết áp tối thiểu gọi là huyết áp tâm thu và huyết áp tâm trương. Hiệu số của Huyết áp tâm trương và huyết áp tâm thu của người này là bao nhiêu?",
    correctAnswer: "60",
    explanation: "Giá trị lớn nhất của $p(t)$ là $120 + 30 = 150$. Giá trị nhỏ nhất của $p(t)$ là $120 - 30 = 90$. Hiệu số là $150 - 90 = 60$."
  },
  {
    id: "p3_4",
    part: 3,
    question: "Giả sử một vật dao động điều hoà xung quanh vị trí cân bằng theo phương trình $x = 2\\cos\\left(5t - \\frac{\\pi}{6}\\right)$. Ở đây, thời gian $t$ tính bằng giây và quãng đường $x$ tính bằng centimét. Hãy cho biết trong khoảng thời gian từ $0$ đến $6$ giây, vật đi qua vị trí cân bằng bao nhiêu lần?",
    correctAnswer: "9",
    explanation: "Vị trí cân bằng $x = 0 \\Leftrightarrow \\cos\\left(5t - \\frac{\\pi}{6}\\right) = 0 \\Leftrightarrow 5t - \\frac{\\pi}{6} = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 5t = \\frac{2\\pi}{3} + k\\pi \\Leftrightarrow t = \\frac{2\\pi}{15} + \\frac{k\\pi}{5}$. Từ $0 \\le t \\le 6$ giải ra $0 \\le \\frac{2\\pi}{15} + \\frac{k\\pi}{5} \\le 6$. Suy ra có 9 giá trị nguyên của $k$."
  },
  {
    id: "p3_5",
    part: 3,
    question: "Huyết áp là áp lực máu cần thiết tác động lên thành động mạch nhằm đưa máu đi nuôi dưỡng các mô trong cơ thể. Nhờ lực co bóp của tim và sức cản của động mạch mà huyết áp được tạo ra. Giả sử huyết áp của một người thay đổi theo thời gian được cho bởi công thức: $p(t) = 120 + 15\\cos(150\\pi t)$ trong đó $p(t)$ là huyết áp tính theo đơn vị mmHg và thời gian $t$ tính theo đơn vị phút. Huyết áp cao nhất và huyết áp thấp nhất lần lượt được gọi là huyết áp tâm thu và huyết áp tâm trương. Tìm chỉ số huyết áp của người đó, biết rằng chỉ số huyết áp được viết là huyết áp tâm thu/huyết áp tâm trương. (Lấy 2 chữ số thập phân, ví dụ nhập 1.25)",
    correctAnswer: "1.29",
    explanation: "Huyết áp tâm thu: $120 + 15 = 135$. Huyết áp tâm trương: $120 - 15 = 105$. Chỉ số = $135 / 105 \\approx 1.29$."
  },
  {
    id: "p3_6",
    part: 3,
    question: "Tính tổng tất cả các nghiệm của phương trình $\\sin 2x = \\cos x$ trong đoạn $[0; 2\\pi]$. (Làm tròn đến 2 chữ số thập phân)",
    correctAnswer: "9.42",
    explanation: "$\\sin 2x = \\cos x \\Leftrightarrow \\cos x(2\\sin x - 1) = 0$. Nghiệm trong $[0; 2\\pi]$ là $\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. Tổng các nghiệm là $\\frac{\\pi}{2} + \\frac{3\\pi}{2} + \\frac{\\pi}{6} + \\frac{5\\pi}{6} = 2\\pi + \\pi = 3\\pi \\approx 9.42$."
  }
];
