'use strict';

describe('pro-profile route', function () {

  beforeEach(function () {
    browser.get('/pro/profile');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ProProfileCtrl');
  });

});
