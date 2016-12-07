describe('Weather',function(){
  var weather = new Weather();
  it('should return true when the weather is stormy', function () {
    expect(weather.isStormy).toEqual(true);
  });
});
