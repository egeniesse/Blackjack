// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.App = (function(superClass) {
    extend(App, superClass);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var deck;
      this.set('deck', deck = new Deck());
      this.set('playerHand', deck.dealPlayer());
      this.set('dealerHand', deck.dealDealer());
      this.get('playerHand').on('stand', (function(_this) {
        return function() {
          return _this.get('dealerHand').dealer();
        };
      })(this));
      return this.get('dealerHand').on('evaluate', (function(_this) {
        return function() {
          if (_this.get('playerHand').scores() > _this.get('dealerHand').scores()) {
            return alert('You win!');
          } else if (_this.get('playerHand').scores() < _this.get('dealerHand').scores()) {
            return alert('You lose');
          } else {
            return alert("It's a tie!");
          }
        };
      })(this));
    };

    return App;

  })(Backbone.Model);

}).call(this);
