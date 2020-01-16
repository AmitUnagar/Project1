/**
 * Theme: Uplon Admin Template
 * Author: Coderthemes
 * Tree view
 */

$( document ).ready(function() {
    
    // Basic
    $('#basicTree').jstree({
        'core' : {
            'themes' : {
                'responsive': false
            }
        },
        'types' : {
            'default' : {
                'icon' : 'icofont icofont-folder'
            },
            'file' : {
                'icon' : 'icofont icofont-file-alt'
            }
        },
        'plugins' : ['types']
    });
    

    // Checkbox
    $('#checkTree').jstree({
		'core' : {
			'themes' : {
				'responsive': false
			}
		},
        'types' : {
            'default' : {
                'icon' : 'icofont icofont-folder'
            },
            'file' : {
                'icon' : 'icofont icofont-file-alt'
            }
        },
        'plugins' : ['types', 'checkbox']
    });
    
    
});