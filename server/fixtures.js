Meteor.startup(function() {
   if (Meteor.users.find().count() == 0) {
       var users = [
           {username:"normcore",name:"Normal User",email:"normal@site.com",roles:[], password: "normal3210"},
           {username:"admin",name:"Admin User",email:"admin@site.com",roles:['admin'], password: "admin3210"}
       ];

       _.each(users, function (user) {
           var id = Accounts.createUser({
               username: user.username,
               email: user.email,
               password: user.password,
               profile: { name: user.name }
           });

           if (user.roles.length > 0) {
               Roles.addUsersToRoles(id, user.roles);
           }
       });
   };
});
