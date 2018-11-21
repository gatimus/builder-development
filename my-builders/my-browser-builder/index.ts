import { BuilderContext, Builder, BuilderConfiguration, BuildEvent } from '@angular-devkit/architect';
import { BrowserBuilder, BrowserBuilderSchema } from '@angular-devkit/build-angular';
import { Observable } from 'rxjs';

export class MyBrowserBuilder extends BrowserBuilder implements Builder<BrowserBuilderSchema> {

  constructor(context: BuilderContext) {
    super(context);
  }

  public run(builderConfig: BuilderConfiguration<BrowserBuilderSchema>): Observable<BuildEvent> {
    // do custom
    return super.run(builderConfig);
  }

}

export default MyBrowserBuilder;
