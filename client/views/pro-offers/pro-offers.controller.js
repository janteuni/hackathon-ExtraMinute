'use strict';

angular.module('extraMinute')
  .controller('ProOffersCtrl', function ($timeout) {

    var vm = this;

    angular.extend(vm, {
      selectOffer: function() {
        vm.offers[0].jobs[1].status = 'booked';
        vm.offers[0].jobs.splice(2);
      },
      getJobIcon: function (job) {
        return ({
            'Sommelier': 'icon-bottle',
            'Cuisto': 'icon-couvert',
            'Sous-chef': 'icon-toque',
            'Service': 'icon-clo',
            'Barman': 'icon-glass',
            'Commis': 'icon-cut'
          })[job] || 'ion-help';
      },
      offers: [
        {
          date: '20 Mars - Diner',
          status: 'available',
          jobs: [
            {
              name: 'Cuisto',
              extra: 'Luis Azealo',
              status: 'booked'
            },
            {
              name: 'Sommelier',
              extra: 'Anne Poulis',
              status: 'confirmed'
            },
            {
              name: 'Sommelier',
              extra: 'Vincent Tourah',
              status: 'asked'
            },
            {
              name: 'Sommelier',
              extra: 'Marc Loupp',
              status: 'asked'
            }
          ]
        },
        {
          date: '21 Mars - Diner',
          status: 'available',
          jobs: [
            {
              name: 'Sommelier',
              extra: 'Anne Poulis',
              status: 'asked'
            },
            {
              name: 'Sommelier',
              extra: 'Paul Bichat',
              status: 'asked'
            }
          ]
        }
      ]
    });

    // anim

    $timeout(function () {

      var results = angular.element('.yolo-result');
      var results2 = angular.element('.yolo-yallah');

      TweenMax.staggerFrom(
        results,
        0.5,
        {
          scale: 0.5,
          opacity: 0,
          ease: Back.easeOut,
          force3D: true
        },
        0.05
      );

      TweenMax.staggerFrom(
        results2,
        1,
        {
          y: 20,
          opacity: 0,
          ease: Back.easeOut,
          force3D: true
        },
        0.3
      );

    });

  });
