/** electron/main.ts */

import { app, BrowserWindow } from 'electron';
import { join } from 'path';

const createWindow = () => {
	const win = new BrowserWindow({
		width: 960,
		height: 600,
		webPreferences: {
			nodeIntegration: true, // 设置是否在页面中启用 Node.js 集成模式
			contextIsolation: false, // 设置是否启用上下文隔离模式。
		},
	});

	if (process.env.VITE_DEV_SERVER_URL) {
		win.loadURL(process.env.VITE_DEV_SERVER_URL);
	} else {
		win.loadFile(join(__dirname, 'index.html'));
	}
};

app.whenReady().then(createWindow);

