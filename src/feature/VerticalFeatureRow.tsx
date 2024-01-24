import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/button/Button';

/**
 * Interface for the props of the VerticalFeatureRow component.
 *
 * @property {string} title - The title of the vertical feature.
 * @property {string} description - The description of the vertical feature.
 * @property {string} image - The URL of the image associated with the vertical feature.
 * @property {string} imageAlt - The alt text for the image.
 * @property {boolean} [reverse] - Optional. Specifies whether the image should be displayed on the right side of the description.
 * @property {string} [projectLink] - Optional. The URL of the project associated with the vertical feature.
 * @property {string} [demoVideo] - Optional. The URL of the demo video for the vertical feature.
 */
type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  projectLink?: string;
  demoVideo?: string;
  docLink?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <div className="mt-8">
          {props.projectLink && (
            <Link href={props.projectLink} target={'_blank'}>
              <Button>查看项目</Button>
            </Link>
          )}
          {props.demoVideo && (
            <Link href={props.demoVideo} className={'px-2'} target={'_blank'}>
              <Button className={'hover:bg-grey-800'}>演示视频</Button>
            </Link>
          )}
          {props.docLink && (
            <Link href={props.docLink} target={'_blank'}>
              <Button className={'hover:bg-grey-800'}>阅读文档</Button>
            </Link>
          )}
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
