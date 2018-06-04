import { MainWindowModule } from './main-window.module';

describe('MainWindowModule', () => {
  let mainWindowModule: MainWindowModule;

  beforeEach(() => {
    mainWindowModule = new MainWindowModule();
  });

  it('should create an instance', () => {
    expect(mainWindowModule).toBeTruthy();
  });
});
