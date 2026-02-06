
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 'YOUR_REPO_NAME'을 실제 GitHub 저장소 이름으로 변경해야 합니다.
  // 예: https://github.com/user/inclab -> base: '/inclab/'
  base: './', 
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
