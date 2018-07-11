const { app, BrowserWindow,Menu, ipcMain } = require('electron')
const url = require('url');
const path = require('path');



let win;
let addWindow;
let child;



function createWindow(){
	win = new BrowserWindow({
		width: 800,
		height: 800,

	});


	win.loadURL(url.format({
		pathname: path.join(__dirname, 'win.html'),
		protocol: 'file:',
		slashes: true

	}));



	win.on('closed', function() {
		win = null;
		app.quit();
	})
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

	Menu.setApplicationMenu(mainMenu);

}

app.on('ready',createWindow)


app.on('window-all-closed', function(){
	if (process.platform !== 'darwin'){
		app.quit()
	}
})


const mainMenuTemplate = [
{
	label: 'File',
	submenu:[
	{
		label:'Quit',
		accelerator: process.platform == 'darwin' ? 'Command+Q' :
		"Ctrl+Q",
		click(){
			app.quit();
		}
	},{ label: "Undo", accelerator: process.platform == 'darwin' ? 'Command+Z' :
		"Ctrl+Z" },
            { label: "Redo", accelerator: process.platform == 'darwin' ? 'Command+shift+Z' :
		"Ctrl+shift+Z"  },
            { label: "Cut", accelerator: process.platform == 'darwin' ? 'Command+X' :
		"Ctrl+X" },
            { label: "Copy", accelerator: process.platform == 'darwin' ? 'Command+C' :
		"Ctrl+C"  },
            { label: "Paste", accelerator: process.platform == 'darwin' ? 'Command+V' :
		"Ctrl+V" },
            { label: "Select All", accelerator: process.platform == 'darwin' ? 'Command+A' :
		"Ctrl+A" }]
}
];

if(process.platform =='darwin'){
	mainMenuTemplate.unshift({});
}

if(process.env.NODE_ENV !== 'production'){
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu:[
		{
			label: "Toggle DevTools",
			accelerator: process.platform == 'darwin' ? 'Command+I' :
		"Ctrl+I",
			click(item, focusedWindow){
				focusedWindow.toggleDevTools();
			}
		},
		{
			label: "reload",
			accelerator: process.platform == 'darwin' ? 'Command+R' :
			"Ctrl+R",
		}]
	})
}

