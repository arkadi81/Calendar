$(document).ready(function(){
        $(function(){
            addNewEvent = function(e){
                $('#content').html('Loading...');
                $.ajax({
                    type: 'GET',
                    url: '/add', 
                    data: {},
                    success: function(msg) {
                        $('#content').fadeOut(800, function(){
                            $('#content').html(msg).fadeIn().delay(2000);

                        });
                    }
                });
                //var socket = io();
                // socket.emit('comment added',{});
                // socket.on('notify everyone',function(msg){
                //                 // Will explain in next section.
                //     notifyMe(msg.user,msg.comment);
                // });
            };

            submitNewEvent = function() {
                $('#content').html('Loading...');
                var post_data = form.serialize();
                $.ajax({
                    type: 'POST',
                    url: '/add', 
                    data: post_data,
                    success: function(msg) {
                        $('#content').fadeOut(800, function(){
                            $('#content').html(msg).fadeIn().delay(2000);

                        });
                    }
                });

            };


            
            // remember 2 sets of routes. one client side, one REST
            //TODO, deal with client side routing later.

        });


        notifyMe = function(title,body) {
          if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
          }
          else if (Notification.permission === "granted") {
                var options = {
                        body: body,
                        icon: "icon.jpg",
                        dir : "ltr"
                     };
                  var notification = new Notification(title,options);
          }
          else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
              if (!('permission' in Notification)) {
                Notification.permission = permission;
              }
            
              if (permission === "granted") {
                var options = {
                      body: body,
                      icon: "icon.jpg",
                      dir : "ltr"
                  };
                var notification = new Notification(title,options);
              }
            });
          }
        };

});