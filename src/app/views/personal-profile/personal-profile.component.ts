import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent {
  profile = {
    name: 'John Doe',
    age: 30,
    location: 'New York, NY',
    occupation: 'Software Developer',
    email: 'john.doe@example.com',
    photos : [
      { url: '../../../assets/img/perfiles/fincas/finca2.jpg', alt: 'Photo 1' },
      { url: '../../../assets/img/perfiles/fincas/finca4.jpeg', alt: 'Photo 2' },
      { url: '../../../assets/img/perfiles/fincas/finca23.jpg', alt: 'Photo 3' }
    ]
  };  

}
