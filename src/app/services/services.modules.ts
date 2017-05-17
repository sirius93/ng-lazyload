import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetUserDetailsResolverService} from './resolvers/get-user-data-resolver.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GetUserDetailsResolverService]
})
export class ServicesModule { }
