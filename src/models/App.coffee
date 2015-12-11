# TODO: Refactor this model to use an internal Game Model instead
# of containing the game logic directly.
class window.App extends Backbone.Model
  initialize: ->
    @set 'deck', deck = new Deck()
    @set 'playerHand', deck.dealPlayer()
    @set 'dealerHand', deck.dealDealer()

    @get('playerHand').on 'stand', =>
      @get('dealerHand').dealer()

    @get('dealerHand').on 'evaluate', =>
      if @get('playerHand').scores() > @get('dealerHand').scores() then alert 'You win!'
      else if @get('playerHand').scores() < @get('dealerHand').scores() then alert 'You lose'
      else alert "It's a tie!"
