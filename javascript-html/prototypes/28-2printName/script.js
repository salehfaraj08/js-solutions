const obj = {
    name: 'saleh',

    print: function() {
        console.log(this.name);
    },


    print2: function() {
        setTimeout(function() {
            console.log(this.name);
        }.bind(this), 1000);
    }

}
obj.print();
obj.print2();