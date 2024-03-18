import { Select, SelectItem, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectIcon, Icon, ChevronDownIcon } from '@gluestack-ui/themed';

export default function ModerationInput() {
    return (
        <Select sx={{ borderRadius: '50%'}} defaultValue="fakeNews">
            <SelectTrigger variant="outline" size="md" sx={{ borderRadius: '50%', width: 170, bgColor: '#E4E4E4', borderColor: '#E4E4E4'}}>
                <SelectInput sx={{ fontWeight: '$bold'}} />
                
                <SelectIcon mr="$3">
                    <Icon as={ChevronDownIcon} />
                </SelectIcon>
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
