
$(document).ready(function(){

    // Loader Start
    $('.loader-bg').fadeOut();
    // Loader End
        

    // Side Menu Start
    $.sidebarMenu($('.sidebar-menu'));
    // Side Menu End
    
    
    // Left side menu scrollbar speed setting
    $(".side-menu-wrap").mCustomScrollbar({
      mouseWheelPixels:300 //change this to a value, that fits your needs
    });
    
    // All data table recall afte 0.6 second.
    setTimeout(function(){
    $($.fn.dataTable.tables(true)).DataTable()
    .columns.adjust();
    },600)

    // Navigation Icon Click Event Start
    $(".nav-icon").click(function(){
      $(this).toggleClass("close")
      $(".side-menu-wrap").toggleClass("hide");
      $(".body-spacer").toggleClass("m-open");
        setTimeout(function(){
         $($.fn.dataTable.tables(true)).DataTable()
         .columns.adjust();
        },600)
    });
    // Navigation Icon Click Event End
    

    // Header top right drop down Start
    $( ".dropdown-primary" ).click(function() {
        // don't remove this click event cause it's necessary for ipad.
        // If we remove this click event drop down will not work in ipad.
    });
    // Header top right drop down End
    

    // Select 2 Start
    $('.js-example-basic-single').select2();
    $('.js-example-basic-multiple').select2();
    // Select 2 End
    

    // Find URL and apply active class in menu START
    $(function() {
        var pgurl = window.location.href.substr(window.location.href
        .lastIndexOf("/")+1);
        $(".side-menu-wrap ul li a").each(function(){
            if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
            $(this).parent("li").addClass("current-active");
        })
        $(".current-active").parents(".sidebar-submenu").parents('li').addClass("pcoded-trigger");
        $(".current-active").parents(".sidebar-submenu").show();
    });

    // $(document).on("click",".pcoded-trigger",function(){
    //     $(this).toggleClass("pcoded-trigger");
    // });
    // Find URL and apply active class in menu END


    // File Upload START
    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
          $(".file-upload").removeClass('active');
          $("#noFile").text("No file chosen..."); 
        }
        else {
          $(".file-upload").addClass('active');
          $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
        }
    });
    // File Upload END

    // Data Table column ADJUST in modal START
    $('.modal').on('show.bs.modal', function (e) {
        setTimeout(function(){
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
        },500)
    });
    $('.modal').on('shown.bs.modal', function (e) {
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
    });
    // Data Table column ADJUST in modal End


    // Tooltip code
    $('[data-toggle="tooltip"]').tooltip();

});











$(document).ready(function(){

    // Common Data Table Start
    $('.common-data-table').DataTable({
        //"responsive": true,
        //"scrollX": true,
        "fnDrawCallback": function () {
            setTimeout(function () {
                $(window).resize();
            }, 300);
        }
    });
    // Common Data Table End
    
    
    // vertical scroll Data Table Start
    $('#vscroll').DataTable( {
        "scrollX": true,
        "scrollY": "300px",
        "scrollCollapse": true,
        "paging": false,
        "responsive": true,
        "fnDrawCallback": function () {
            setTimeout(function () {
                $(window).resize();
            }, 300);
        }
        
    });
    // Vertical scroll Data Table End


    // ScrollX Table Start
    $('#scrollx-table').DataTable({
        "scrollX": true,
        "scrollCollapse": true,
        "scrollY": false,
        aoColumnDefs: [
            {
               bSortable: false,
               aTargets: [ -1 ]
            }
          ]
    });
    // ScrollX Table End


    // action Data Table Start
     $('#dashtable').DataTable({
        "scrollX": true,
        // aoColumnDefs: [
        //     {
        //        bSortable: false,
        //        aTargets: [ -1 ],
        //     }
        //   ]
    });
    // action Data Table End


    // label Data Table Start
    $('#label-table').DataTable({
        "scrollX": true,
        aoColumnDefs: [
            {
               bSortable: false,
               aTargets: [ -1 ],
            }
          ]
    });
    // label Data Table End


    // horizontal and vertical Data Table Start
    $('#hvscroll').DataTable( {
        // "scrollY": 250,
        "scrollCollapse": true,
        "scrollX": true,
        autoWidth: true,
        "fnDrawCallback": function () {
            setTimeout(function () {
                $(window).resize();
            }, 300);
        }
    } );
    // horizontal and vertical Data Table End


    // Left Side Fixed columns Table Starting
    var table = $('#leftfixedcolumn').removeAttr('width').DataTable( {
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        // paging: false,
        columnDefs: [
            { width: 200, targets: 0 }
        ],
        fixedColumns: true
    });
    // Left Side Fixed columns Table Ending


    // Popup Left Side Fixed columns Table Starting
    var table = $('#leftfixedcolumn-popup').removeAttr('width').DataTable( {
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        // paging: false,
        columnDefs: [
            { width: 200, targets: 0 }
        ],
        fixedColumns: true
    });
    // Popup Left Side Fixed columns Table Ending


    // Right Side Fixed columns Table Starting
        var table = $('#rightfixedcolumn').removeAttr('width').DataTable( {
            scrollY: "370px",
            scrollX: true,
            scrollCollapse: true,
            // paging: false,
            "fnDrawCallback": function () {
                setTimeout(function () {
                    $(window).resize();
                }, 300);
            },
            fixedColumns: {
                leftColumns: 1,
                rightColumns: 0,
            }
            
            // fixedColumns: true
        });
    // Right Side Fixed columns Table Ending


    // $('#rightfixedcolumn').DataTable( {
    //     "scrollX": true,
    //     "scrollCollapse": true,
    //     "paging": false,
    //     "responsive": true,
    //     "autoWidth": true,
    //     "fixedColumns":   {
    //         rightColumns: 2,
    //         leftColumns: 0
    //     },
    //     "fnDrawCallback": function () {
    //         setTimeout(function () {
    //             $(window).resize();
    //         }, 300);
    //     }
        
    // });


    // $('#ajaxtable').DataTable( {
    //     "destroy":true,
    //     "ajax": {
    //         "url": 'http://comnet.com.sg/creative/team4/data/ajax.json',
    //         "type": "GET",
    //         "dataType": 'jsonp',
    //         "contentType": 'application/json',
    //         "crossDomain": true,
    //         "headers": {
    //             "Access-Control-Allow-Origin":"*"
    //         }
    //     }
    // });


});





// $('div').on('resize', function() {
//     debugger
//   $(".dataTable").DataTable().columns.adjust().draw();
// });







//----------------- Wizard script
$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-success').trigger('click');
});
//----------------- Wizard script


$(document).ready(function(){
    $('form input').change(function () {
      $('form p').text(this.files.length + " file(s) selected");
    });
  });



// start Case Management
$('#case-management').DataTable( {
    "scrollX": true,
    // "scrollY": "300px",
    "scrollCollapse": true,
    "paging": true,
    "responsive": true,
    "searching": true,
    "fnDrawCallback": function () {
        setTimeout(function () {
            $(window).resize();
        }, 300);
    }    
});
// End Case Management
