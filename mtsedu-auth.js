/**
 * mtsedu-auth.js - Module xác thực chung cho tất cả bài thi
 * 
 * Đọc session từ URL params (truyền từ MTSedu khi click bài thi)
 * hoặc từ localStorage (sau khi đã lưu lần đầu).
 * 
 * localStorage bị cô lập theo domain nên cần truyền qua URL params.
 */

const SESSION_KEY = 'mtsedu_session';

/**
 * Lấy thông tin session — ưu tiên URL params → localStorage
 * @returns {object|null}
 */
export function getMTSeduSession() {
  // 1. Đọc từ URL params (khi mới click từ MTSedu vào)
  const params = new URLSearchParams(window.location.search);
  const urlUsername = params.get('mtsedu_user');
  const urlName = params.get('mtsedu_name');
  const urlId = params.get('mtsedu_id');
  const returnUrl = params.get('mtsedu_return');

  if (urlUsername) {
    const session = {
      username: urlUsername,
      displayName: urlName || urlUsername,
      id: urlId || ('user_' + urlUsername),
      returnUrl: returnUrl || 'https://mtsedu.vercel.app'
    };
    // Lưu vào localStorage của domain quiz để F5 không bị mất
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch {}
    return session;
  }

  // 2. Đọc từ localStorage (sau khi đã lưu từ URL params lần trước)
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    return (user && user.username) ? user : null;
  } catch {
    return null;
  }
}

/**
 * Lấy URL quay lại MTSedu
 * @returns {string}
 */
export function getReturnUrl() {
  const session = getMTSeduSession();
  return (session && session.returnUrl) ? session.returnUrl : 'https://mtsedu.vercel.app';
}

/**
 * Kiểm tra đăng nhập
 * @returns {boolean}
 */
export function isLoggedIn() {
  return getMTSeduSession() !== null;
}

/**
 * Lấy tên hiển thị
 * @returns {string}
 */
export function getStudentName() {
  const s = getMTSeduSession();
  return s ? (s.displayName || s.username) : '';
}

/**
 * Xóa session khỏi localStorage (dùng khi muốn đăng xuất từ trang quiz)
 */
export function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch {}
}

/**
 * Hiển thị màn hình yêu cầu đăng nhập
 * @param {HTMLElement} container - Element chứa form đăng nhập
 * @param {string} returnHash - Hash của trang MTSedu để quay lại (vd: '#math')
 */
export function showLoginRequired(container, returnHash = '') {
  const mtseduUrl = 'https://mtsedu.vercel.app/' + returnHash;

  container.innerHTML = `
    <div style="
      max-width: 480px;
      margin: 0 auto;
      padding: 36px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    ">
      <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
      <h2 style="font-size: 22px; font-weight: 700; margin: 0 0 8px; color: #111;">
        Vui lòng đăng nhập
      </h2>
      <p style="color: #666; font-size: 15px; margin: 0 0 28px; line-height: 1.6;">
        Bạn cần đăng nhập vào hệ thống <strong>MTS Education</strong> để làm bài thi này.
      </p>
      <a href="${mtseduUrl}" style="
        display: inline-block;
        background: #000;
        color: #fff;
        text-decoration: none;
        padding: 14px 32px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
      ">
        Đăng nhập tại MTS Education →
      </a>
      <p style="margin-top: 20px; font-size: 13px; color: #999;">
        Tài khoản được cung cấp bởi giáo viên
      </p>
    </div>
  `;
}

/**
 * Tạo nút "Quay lại trang chủ" và chèn vào đầu trang
 * Tự động lấy URL quay lại từ session
 */
export function insertBackButton() {
  const session = getMTSeduSession();
  const returnUrl = (session && session.returnUrl) ? session.returnUrl : 'https://mtsedu.vercel.app';

  const btn = document.createElement('div');
  btn.id = 'mtsedu-back-btn';
  btn.innerHTML = `
    <a href="${returnUrl}" style="
      display: inline-flex;
      align-items: center;
      gap: 8px;
      position: fixed;
      top: 14px;
      left: 14px;
      z-index: 9999;
      background: rgba(0,0,0,0.85);
      color: white;
      text-decoration: none;
      padding: 9px 18px;
      border-radius: 50px;
      font-size: 14px;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      backdrop-filter: blur(8px);
      box-shadow: 0 2px 12px rgba(0,0,0,0.3);
      transition: background 0.2s;
    " onmouseover="this.style.background='rgba(0,0,0,1)'" onmouseout="this.style.background='rgba(0,0,0,0.85)'">
      ← Trang chủ
    </a>
  `;
  document.body.appendChild(btn);
}
