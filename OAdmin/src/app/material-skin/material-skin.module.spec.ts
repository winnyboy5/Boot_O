import { MaterialSkinModule } from './material-skin.module';

describe('MaterialSkinModule', () => {
  let materialSkinModule: MaterialSkinModule;

  beforeEach(() => {
    materialSkinModule = new MaterialSkinModule();
  });

  it('should create an instance', () => {
    expect(materialSkinModule).toBeTruthy();
  });
});
