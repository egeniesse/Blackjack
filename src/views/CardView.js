// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.CardView = (function(superClass) {
    extend(CardView, superClass);

    function CardView() {
      return CardView.__super__.constructor.apply(this, arguments);
    }

    CardView.prototype.className = 'card';

    CardView.prototype.template = _.template('<%= rankName %> of <%= suitName %>');

    CardView.prototype.initialize = function() {
      return this.render();
    };

    CardView.prototype.render = function() {
      this.$el.children().detach();
      this.$el.html(this.template(this.model.attributes));
      if (!this.model.get('revealed')) {
        return this.$el.addClass('covered');
      }
    };

    return CardView;

  })(Backbone.View);

}).call(this);
