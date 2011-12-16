$(function () {

  $('textarea.mention').mentionsInput({
    triggerChar : ['@', '#'],
    onDataRequest:function (mode, query, callback, triggerChar) {
      var data = [];

      if (triggerChar == '@') {
        data = [
            { id:1, name:'Kenneth Auchenberg', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:2, name:'Jon Froda', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:3, name:'Anders Pollas', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:4, name:'Kasper Hulthin', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:5, name:'Andreas Haugstrup', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:6, name:'Pete Lacey', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:7, name:'kenneth@auchenberg.dk', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:8, name:'Pete Awesome Lacey', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:9, name:'Kenneth Hulthin', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' }
          ];
      }
      else {
        data = [
                { id:'12121',  name:'Pasta', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'tag' },
                { id:'231223', name:'Pizza', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'tag' },
                { id:'72',     name:'Potates', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'tag' },
        ];
      }

      data = _.filter(data, function(item) { return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 });

      callback.call(this, data);
    }
  });

  $('.get-syntax-text').click(function() {
    $('textarea.mention').mentionsInput('val', function(text) {
      alert(text);
    });
  });

  $('.get-mentions').click(function() {
    $('textarea.mention').mentionsInput('getMentions', function(data) {
      alert(JSON.stringify(data));
    });
  }) ;

});