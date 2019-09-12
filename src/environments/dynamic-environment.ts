declare var window: any;


export class Environment {

  public production: boolean;
  constructor(isProduction:boolean) {
    this.production = isProduction;

  }

  Props(){
    if (window.config) {
      let Keys = Object.keys(window.config)
      console.log(Keys)
    }
  }

  public get ENV() {

    return window.config;
  }
}
