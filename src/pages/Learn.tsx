import { getUnits } from '../data/lessons';
import { UnitSection } from '../components/UnitSection';
import { useUserStore } from '../store/useUserStore';

export const Learn = () => {
    const { language } = useUserStore();
    const units = getUnits(language);

    return (
        <div className="flex flex-col items-center py-8 pb-32">
            {units.map((unit, index) => (
                <UnitSection key={unit.id} unit={unit} unitIndex={index} />
            ))}
        </div>
    );
};
