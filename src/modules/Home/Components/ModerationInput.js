import { Select, SelectItem, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent } from '@gluestack-ui/themed';

export default function ModerationInput() {
    return (
        <Select>
            <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" defaultValue="fakeNews" />
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                    <SelectItem label="Nepnieuws" value="fakeNews" />
                    <SelectItem label="Discriminatie" value="racism" />
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
