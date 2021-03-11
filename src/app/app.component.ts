import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
  title = 'spaceX';

  missions: any[] | undefined;
  launch: string | undefined ;
  land: string | undefined ;
  loading: boolean = true;
  year: string | undefined;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getAllPrograms();
  }

  getAllPrograms() {
    console.log( this.land, this.launch );
    this.http.get( 'https://api.spacexdata.com/v3/launches?limit=100' ).subscribe( ( data: any ) => {
      console.log( data );
      this.missions = data;
      this.loading = false;
    } );
  }

  launchYear( year: string ) {
    console.log( year );

    this.year = year;
    this.getlandingPrograms();
    // const options = {
    //   launch_year: year
    // };
    // this.http.get( 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;', { params: options } ).subscribe( ( data: any ) => {
    //   this.missions = data;
    //   console.log( 'year API is called' );


    // } )
    // this.http.get()
  }

  landing( e: boolean ) {
    this.launch = e;
    this.getlandingPrograms();
    // this.http.get( 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=' + e ).subscribe( ( data: any ) => {
    //   this.missions = data;
    // } );
  }

  launching( e: boolean ) {
    this.land = e;
    this.getlandingPrograms();

    // this.http.get( 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=' + e ).subscribe( ( data: any ) => {
    //   this.missions = data;
    // } )
  }

  getlandingPrograms() {
    console.log( this.launch, this.land, this.year );


    let params = new HttpParams();
    params = params.append('launch_success', );
    params = params.append('land_success', 10);
    params = params.append('launch_year', this.year)


    'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014'
      // let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year='+ this.year;
    // let url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=' + this.launch + '&amp;land_success=' + this.land + '&amp;launch_year=' + this.year;
    // this.http.get(url).subscribe(( data: any) => {
    //   console.log(data);
    //   this.missions = data;
    // })

   this.http.get('https://api.spaceXdata.com/v3/launches?limit=100',{ launch_success : launch  })


    // this.http.get( 'https://api.spacexdata.com/v3/launches?limit=100', { params: options } )
  }

}
