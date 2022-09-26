import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-image-carousel';
  imageUrl: string = 'https://ipsos-smx-us-east-2-int-srp2-media.s3.us-east-2.amazonaws.com/57d640b3-cda6-4703-8080-2ef604de2086/private/image/f92a6103-5fb7-499c-9526-6344aa551a6e/screenshot-2022-06-06-at-9.09.38-pm.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220926T060106Z&X-Amz-SignedHeaders=host&X-Amz-Expires=40000&X-Amz-Credential=AKIAWGTWZFA3RYKELLO5%2F20220926%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=813b4881f54ddb3e105d74d3044bd75a83eef80ce7cdeff9817ea29180be7365';
  avatarUrl: string = 'https://ipsos-smx-us-east-2-int-srp2-media.s3.us-east-2.amazonaws.com/57d640b3-cda6-4703-8080-2ef604de2086/public/image/2da0478d-e232-4bde-88f0-91dca355469e/2e.jpg';

  activeSlides: SlidesOutputData = new SlidesOutputData;

  slidesStore: any[] = [];

  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    nav: true,
    items: 1,
    lazyLoad: true,
    lazyLoadEager: 1,
    navText: [
      `<i class='nav-btn keyboard_arrow_left material-icons'>keyboard_arrow_left</i>`,
      `<i class='nav-btn keyboard_arrow_right material-icons'>keyboard_arrow_right</i>`
    ],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
    },
  };

  ngOnInit() {
    this.slidesStore = [
      {
        id: 1, title: 'Image 1', url: 'https://ipsos-smx-us-east-2-int-srp2-media.s3.us-east-2.amazonaws.com/57d640b3-cda6-4703-8080-2ef604de2086/private/image/f92a6103-5fb7-499c-9526-6344aa551a6e/screenshot-2022-06-06-at-9.09.38-pm.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220926T060106Z&X-Amz-SignedHeaders=host&X-Amz-Expires=40000&X-Amz-Credential=AKIAWGTWZFA3RYKELLO5%2F20220926%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=813b4881f54ddb3e105d74d3044bd75a83eef80ce7cdeff9817ea29180be7365'
      },
      {
        id: 2, title: 'Image 2', url: 'https://ipsos-smx-us-east-2-int-srp2-media.s3.us-east-2.amazonaws.com/57d640b3-cda6-4703-8080-2ef604de2086/private/image/ab366f46-8c70-4e97-8e20-e441090507d3/1618249248672?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220926T111823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=40000&X-Amz-Credential=AKIAWGTWZFA3RYKELLO5%2F20220926%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=9e1e674e65c845d56e998e3ccb6508a1aeb31d79583e665d8a2ba52b2c06ca82'
      },
      {
        id: 3, title: 'Image 3', url: 'https://ipsos-smx-us-east-2-int-srp2-media.s3.us-east-2.amazonaws.com/57d640b3-cda6-4703-8080-2ef604de2086/private/image/e6fccb89-c32a-485c-8ead-5d2ef0898c09/ca-language-test-ca-14-precipitation-topic-wheel.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220926T111821Z&X-Amz-SignedHeaders=host&X-Amz-Expires=40000&X-Amz-Credential=AKIAWGTWZFA3RYKELLO5%2F20220926%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=0f00f0693fe0cc2c45a0143e6adc02759df0e88f07a6f019d34c6fb3454d2140'
      },
      {
        id: 4, title: 'Image 4', url: 'https://ipsos-smx-us-east-2-int-srp2-media.s3.us-east-2.amazonaws.com/57d640b3-cda6-4703-8080-2ef604de2086/private/image/7728927d-c94e-4571-aca0-6c7c59eb9680/20210218-213331-largejpg.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220926T111823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=40000&X-Amz-Credential=AKIAWGTWZFA3RYKELLO5%2F20220926%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=ca5496f0d9275e43743e5cc1f32c4238534056f4c106cd23ded066859471b30a'
      }

    ]

  }
  
}
