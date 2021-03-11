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
  launch: string | undefined;
  land: string | undefined;
  loading = true;
  year: string | undefined;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getAllPrograms();
  }

  getAllPrograms() {
    this.http.get( 'https://api.spacexdata.com/v3/launches?limit=100' ).subscribe( ( data: any ) => {
      console.log( data );
      this.missions = data;
      this.loading = false;
    } );
  }

  launchYear( year: string ) {
    this.year = year;
    this.getlandingPrograms();
  }

  landing( e: string ) {
    this.land = e;
    this.getlandingPrograms();
  }

  launching( e: string ) {
    this.launch = e;
    this.getlandingPrograms();
  }

  reset() {
    this.getAllPrograms();
    this.land = undefined;
    this.launch = undefined;
    this.year = undefined;

  }

  getlandingPrograms() {
    this.loading = true;
    console.log( this.launch, this.land, this.year );


    let params = new HttpParams();
    if ( this.launch !== undefined ) {
      params = params.append( 'launch_success', this.launch );
    }
    if ( this.land !== undefined ) {
      params = params.append( 'land_success', this.land );
    }
    if ( this.year !== undefined ) {
      params = params.append( 'launch_year', this.year );
    }

    console.log( params );


    this.http.get( 'https://api.spaceXdata.com/v3/launches?limit=100', { params } ).subscribe( ( data: any ) => {
      this.missions = data;
      console.log( data );
      this.loading = false;
    } );

  }

}
