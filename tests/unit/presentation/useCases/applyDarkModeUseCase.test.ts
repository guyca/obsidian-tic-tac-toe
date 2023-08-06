import { mockDeep } from 'jest-mock-extended';
import { Document } from '../../../../src/framework/Document';
import { ApplyDarkModeUseCase } from '../../../../src/presentation/useCases/applyDarkModeUseCase';

describe('applyDarkModeUseCase', () => {
  let uut: ApplyDarkModeUseCase;
  let document: Document;

  beforeEach(() => {
    document = mockDeep<Document>();
    uut = new ApplyDarkModeUseCase(document);
  });

  it('should add light color scheme class to body', () => {
    uut.execute('light');

    expect(document.body.classList.add).toHaveBeenCalledWith('light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark');
  });

  it('should add dark color scheme class to body', () => {
    uut.execute('dark');

    expect(document.body.classList.add).toHaveBeenCalledWith('dark');
    expect(document.body.classList.remove).toHaveBeenCalledWith('light');
  });

  it('should not add color scheme class to body if user has no preferences', () => {
    uut.execute('no-preference');

    expect(document.body.classList.add).not.toHaveBeenCalled();
    expect(document.body.classList.remove).not.toHaveBeenCalled();
  });
});
