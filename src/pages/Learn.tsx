import { mockUnits } from '../data/mockData';
import { UnitSection } from '../components/UnitSection';

export const Learn = () => {
    return (
        <div className="flex flex-col items-center py-8 pb-32">
            {mockUnits.map((unit) => (
                <UnitSection key={unit.id} unit={unit} />
            ))}
        </div>
    );
};
