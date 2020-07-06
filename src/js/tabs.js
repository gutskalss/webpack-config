import * as $ from 'jquery'
import 'jqueryui'
;(function ($) {
  'use strict'

  /**
   * Tabs
   */
  $.fn.tabs = function () {
    var $self = $(this)
    var $tabHeaders = $self.find('.js-tab-header').filter(function (index, el) {
      return $(el).parentsUntil($self).length === 1
    })
    var $tabContent = $self
      .find('.js-tab-content')
      .filter(function (index, el) {
        return $(el).parentsUntil($self).length === 1
      })

    /**
     * Activating tab by index
     * @param {Number} index - tab index, which must be activate
     */
    var selectTab = function (index) {
      $tabHeaders.removeClass('active').eq(index).addClass('active')
      $tabContent.removeClass('active').eq(index).addClass('active')
    }

    /**
     * Initialization
     */
    var init = function () {
      selectTab(0)

      // Event handling
      $tabHeaders.on('click', function () {
        selectTab($(this).index())
      })
    }

    init()

    this.selectTab = selectTab

    return this
  }

  // Initialize tabs on all blocks with 'js-tabs' class
  $('.js-tabs').each(function () {
    $(this).data('tabs', $(this).tabs())
  })

  // Drop-down menu

  // Assign tab name for menu button
  var dropDownBtnName = () => {
    $('.drop-down-btn').html(
      $('.tab-header.js-tab-header.active').text() + ' ⏷'
    )
  }
  dropDownBtnName()

  // Reasign menu button name when changing tab
  $('.tab-header.js-tab-header').click(() => {
    dropDownBtnName()
  })

  // Drop-down
  $('.drop-down-btn').click(() => {
    $('.tab-header-wrap').toggle(400)
  })

  $('.tab-header').click(() => {
    if ($(window).width() < 768) {
      $('.tab-header-wrap').toggle(400)
    }
  })

  $(window).on('resize', function () {
    if ($(this).width() < 768) {
      $('.tab-header-wrap').css('display', 'none')
    }
    if ($(this).width() >= 768) {
      $('.tab-header-wrap').css('display', 'flex')
    }
  })
})($)
