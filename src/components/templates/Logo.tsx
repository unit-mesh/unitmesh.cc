import { AppConfig } from '../../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img src={`/logo.svg`} alt="UnitMesh Logo" width={48} height={48} />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
