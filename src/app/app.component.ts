import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'portfolio';

  ngOnInit(): void {
    //Menu toogle
    $(document).ready(function () {
      const $toggleCheckbox = $('.toggler');
      const $menu = $('.menu');

      $toggleCheckbox.on('change', function () {
        if ($(this).is(':checked')) {
          $menu.addClass('active');
        } else {
          $menu.removeClass('active');
        }
      });

      $('.menu ul li a').on('click', function () {
        $toggleCheckbox.prop('checked', false);
        $menu.removeClass('active');
      });

      // Smooth Scrolling
      $(document).ready(function () {
        $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          var target = (this as HTMLAnchorElement).hash;
          var $target = $(target);
          console.log(target);

          $('html, body').animate({
            scrollTop: $target.offset()!.top
          }, 900);
        });
      });
    });
  }
}