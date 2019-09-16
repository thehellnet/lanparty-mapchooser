import {Component} from '@angular/core';
import {GameMap} from './models/gamemap';
import {ApiService} from './services/api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public gameMaps: GameMap[] = [
    new GameMap('Backlot', 'mp_backlot', 'assets/cod4_maps/backlot.jpg'),
    new GameMap('Broadcast', 'mp_broadcast', 'assets/cod4_maps/broadcast.jpg'),
    new GameMap('Chinatown', 'mp_carentan', 'assets/cod4_maps/chinatown.jpg'),
    new GameMap('Crash', 'mp_crash', 'assets/cod4_maps/crash.jpg'),
    new GameMap('Crossfire', 'mp_crossfire', 'assets/cod4_maps/crossfire.jpg'),
    new GameMap('Strike', 'mp_strike', 'assets/cod4_maps/strike.jpg'),
    new GameMap('Bloc', 'mp_bloc', 'assets/cod4_maps/bloc.jpg'),
    new GameMap('Bog', 'mp_bog', 'assets/cod4_maps/bog.jpg'),
    new GameMap('Wet Work', 'mp_cargoship', 'assets/cod4_maps/wetwork.jpg'),
    new GameMap('District', 'mp_citystreets', 'assets/cod4_maps/district.jpg'),
    new GameMap('Countdown', 'mp_countdown', 'assets/cod4_maps/backlot.jpg'),
    new GameMap('Downpour', 'mp_farm', 'assets/cod4_maps/downpour.jpg'),
    new GameMap('Overgrown', 'mp_overgrown', 'assets/cod4_maps/overgrown.jpg'),
    new GameMap('Pipeline', 'mp_pipeline', 'assets/cod4_maps/pipeline.jpg'),
    new GameMap('Shipment', 'mp_shipment', 'assets/cod4_maps/shipment.jpg'),
    new GameMap('Showdown', 'mp_showdown', 'assets/cod4_maps/showdown.jpg'),
    new GameMap('Killhouse', 'mp_killhouse', 'assets/cod4_maps/killhouse.jpg'),
    new GameMap('Winter Crash', 'mp_crash_snow', 'assets/cod4_maps/winter_crash.jpg'),
  ];


  constructor(private api: ApiService) {
  }

  changeMap(gametype: string, mapTag: string) {
    this.api.changeMap(gametype, mapTag);
  }
}
