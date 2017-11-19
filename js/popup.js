function save_options() {
  var darkModeToggle = document.getElementById('darkMode').checked;
  storage.StorageArea.set({ 'darkMode' : darkModeToggle }, function() {
	if (!(document.getElementById('darkMode').checked)) {
        browser.tabs.executeScript({
		  file: 'vanilla.js'
		});
    } else {
        browser.tabs.executeScript({
		  file: 'darkMode.js'
		}); 
    } 
    var status = document.getElementById('save');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = 'Save Settings';
    }, 1250);
  });
}
function load_options() {
	storage.StorageArea.get('darkMode', function(items) {
		document.getElementById('darkMode').checked = items.darkMode;
		if (!(document.getElementById('darkMode').checked)) {
			browser.tabs.executeScript({
				file: 'vanilla.js'
			});
		} else {
			browser.tabs.executeScript({
				file: 'darkMode.js'
			}); 
		}
	});
}
var save = document.getElementById("save");
save.addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', load_options);