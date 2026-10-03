/**
 * mtsedu-auth.js - Module xác thực chung cho tất cả bài thi
 * 
 * Đọc session đăng nhập từ MTSedu (localStorage 'userSession')
 * và cung cấp thông tin học sinh để các bài thi dùng tự động.
 * 
 * Cách dùng trong script.js của từng bài thi:
 *   import { getMTSeduSession, showLoginRequired } from './mtsedu-auth.js';
 *   const session = getMTSeduSession(); // { displayName, username, id, ... }
 */

/**
 * Lấy thông tin session đăng nhập từ MTSedu
 * @returns {object|null} - User object hoặc null nếu chưa đăng nhập
 */
export function getMTSeduSession() {
  try {
    const raw = localStorage.getItem('userSession');
    if (!raw) return null;
    const user = JSON.parse(raw);
    // Kiểm tra session hợp lệ (phải có username)
    if (!user || !user.username) return null;
    return user;
  } catch {
    return null;
  }
}

/**
 * Kiểm tra xem người dùng đã đăng nhập chưa
 * @returns {boolean}
 */
export function isLoggedIn() {
  return getMTSeduSession() !== null;
}

/**
 * Lấy tên hiển thị của học sinh đã đăng nhập
 * @returns {string} - Tên hiển thị hoặc chuỗi rỗng
 */
export function getStudentName() {
  const session = getMTSeduSession();
  return session ? (session.displayName || session.username) : '';
}

/**
 * Lấy username (tên tài khoản) của học sinh
 * @returns {string}
 */
export function getStudentUsername() {
  const session = getMTSeduSession();
  return session ? session.username : '';
}

/**
 * Lấy ID của học sinh (để lưu Firebase theo đúng user)
 * @returns {string}
 */
export function getStudentId() {
  const session = getMTSeduSession();
  return session ? session.id : '';
}

/**
 * Hiển thị màn hình yêu cầu đăng nhập thay vì form nhập tay
 * Chèn vào loginContainer nếu chưa đăng nhập
 * @param {HTMLElement} loginContainer - Element chứa form đăng nhập
 * @param {string} returnUrl - URL trang MTSedu để quay lại (tùy chọn)
 */
export function showLoginRequired(loginContainer, returnUrl) {
  const mtseduUrl = returnUrl || 'https://mtsedu.vercel.app/#math';
  
  loginContainer.innerHTML = `
    <div style="
      max-width: 480px;
      margin: 60px auto;
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
        transition: background 0.2s;
      " onmouseover="this.style.background='#333'" onmouseout="this.style.background='#000'">
        Đăng nhập tại MTS Education →
      </a>
      <p style="margin-top: 20px; font-size: 13px; color: #999;">
        Tài khoản được cung cấp bởi giáo viên
      </p>
    </div>
  `;
}
