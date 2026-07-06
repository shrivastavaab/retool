import { Typography } from "../../vendor/tnet_ds/typography";

interface TNetPageHeaderProps {
  title: string;
  description: string;
}

export default function TNetPageHeader({ title, description }: TNetPageHeaderProps) {
  return (
    <div className="space-y-1">
      <Typography variant="h5" weight="medium" component="h2" className="text-foreground">
        {title}
      </Typography>
      <Typography variant="paragraphSm" component="p" className="text-muted-foreground">
        {description}
      </Typography>
    </div>
  );
}
