if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'admin',
        email: 'email@email.com',
        password: 'pleasereset',
        profile: {
            first_name: 'Kevin',
            last_name: 'Green',
            company: 'District Domain',
        }
    });
}
