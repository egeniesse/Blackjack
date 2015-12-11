class window.Hand extends Backbone.Collection
  model: Card

  initialize: (array, @deck, @isDealer) ->

  hit: ->
    @add(@deck.pop())
    if @scores() > 21 then if @isDealer then @trigger 'dealerbust' else @trigger 'playerbust'

  stand: ->
    @trigger 'stand'

  numAce: -> @reduce (memo, card) ->
    memo + card.get('value') is 1
  , 0

  minScore: -> @reduce (score, card) ->
    score + if card.get 'revealed' then card.get 'value' else 0
  , 0

  scores: ->
    # The scores are an array of potential scores.
    # Usually, that array contains one element. That is the only score.
    # when there is an ace, it offers you two scores - the original score, and score + 10.
    min = @minScore()
    [min + 10*i  for i in [0..@numAce()]].reduce (bestscore, nextscore) ->
      if nextscore < 21 and nextscore > bestscore then nextscore else bestscore

  dealer: ->
    while @scores() < 17
      @hit()
