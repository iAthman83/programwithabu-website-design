import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Computer } from "lucide-react";

type Props = {};

const ExpertiseCard = (props: Props) => {
  return (
    <Card className="w-[350px] border-b-4 border-r-4 border-b-primary border-r-primary bg-background">
      <CardHeader className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md p-4">
          <Computer size={40} className="text-foreground" />
          <div className="flex-1 space-y-1">
            <p className="text-xl font-semibold uppercase leading-none text-foreground">
              Software
            </p>
            <p className="text-xl font-semibold uppercase leading-none text-primary">
              Engineer
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 rounded-md px-4">
          <CardDescription className="text-foreground">
            Proficient in both object-oriented and functional programming
            paradigms, with expertise in JavaScript, and TypeScript.
          </CardDescription>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default ExpertiseCard;
