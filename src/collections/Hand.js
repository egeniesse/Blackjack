// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Hand = (function(superClass) {
    extend(Hand, superClass);

    function Hand() {
      return Hand.__super__.constructor.apply(this, arguments);
    }

    Hand.prototype.model = Card;

    Hand.prototype.initialize = function(array, deck, isDealer) {
      this.deck = deck;
      this.isDealer = isDealer;
    };

    Hand.prototype.hit = function() {
      this.add(this.deck.pop());
      if (this.scores() > 21) {
        if (this.isDealer) {
          return this.trigger('dealerbust');
        }
      } else {
        return this.trigger('playerbust');
      }
    };

    Hand.prototype.stand = function() {
      return this.trigger('stand');
    };

    Hand.prototype.numAce = function() {
      return this.reduce(function(memo, card) {
        return memo + card.get('value') === 1;
      }, 0);
    };

    Hand.prototype.minScore = function() {
      return this.reduce(function(score, card) {
        return score + (card.get('revealed') ? card.get('value') : 0);
      }, 0);
    };

    Hand.prototype.scores = function() {
      var i, min;
      min = this.minScore();
      return [
        (function() {
          var j, ref, results;
          results = [];
          for (i = j = 0, ref = this.numAce(); 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            results.push(min + 10 * i);
          }
          return results;
        }).call(this)
      ].reduce(function(bestscore, nextscore) {
        if (nextscore < 21 && nextscore > bestscore) {
          return nextscore;
        } else {
          return bestscore;
        }
      });
    };

    Hand.prototype.dealer = function() {
      var results;
      results = [];
      while (this.scores() < 17) {
        results.push(this.hit());
      }
      return results;
    };

    return Hand;

  })(Backbone.Collection);

}).call(this);
