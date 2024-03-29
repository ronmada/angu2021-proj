import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { Game } from 'src/app/models'
import { HttpService } from 'src/app/services/http.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  // public game!: Game
  private routeSub: Subscription = Subscription.EMPTY
  // private gameSub: Subscription = Subscription.EMPTY
  public game$!: Observable<Game>

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.game$ = this.httpService.getGameDetails(params['id'])
      // setTimeout(() => {
      //   this.gameRating = this.game.metacritic
      // }, 1000)
      // this.getGameDetails(this.gameId)
    })
  }

  // getGameDetails(id: string): void {
  //   this.gameSub = this.httpService
  //     .getGameDetails(id)
  //     .subscribe((gameResp: Game) => {
  //       this.game = gameResp
  //       console.log(this.game)
  //     })
  //   setTimeout(() => {
  //     this.gameRating = this.game.metacritic
  //   }, 1000)
  // }

  getColor(value: number): string {
    if (value > 75) return '#5ee432'
    else if (value > 50) return '#fffa50'
    else if (value > 30) return '#f7aa38'
    else return '#ef4655'
  }
  ngOnDestroy(): void {
    // if (this.gameSub) this.gameSub.unsubscribe()
    if (this.routeSub) this.routeSub.unsubscribe()
  }
}
