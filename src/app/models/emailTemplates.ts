import { User } from './user';

export class EmailTemplates {
    tentant: string;
    commission = `<div class="pagebreak" style="page-break-before: always;">
        <p><img src="https://s3.amazonaws.com/files.formstack.com/public/788477/image_logoabove.png"
                style="width: 162px; display: block; vertical-align: top; margin: 5px auto; height: 92.3128px;"></p>
        <table class="fr-dashed-borders fr-alternate-rows" style="width: 100%;">
            <tbody>
                <tr>
                    <td colspan="4" style="width: 99.073%;">
                        <hr>
                        <div style="text-align: center;"><strong><span style="font-size: 18px;">Commission
                                    Form</span></strong></div>
                        <hr>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="width: 49.1309%;"><strong>Agent Name</strong>:${User.name}<br></td>
                    <td colspan="2" style="width: 49.7103%;"><strong>Date</strong>:${new Date().toLocaleString()}<br></td>
                </tr>
                <tr>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                </tr>
                <tr>
                    <td colspan="2" style="width: 51.1008%;"><strong>Client Names</strong>: ${this.tentant}<br></td>
                    <td colspan="2" style="width: 47.7404%;"><strong>Move-In date:&nbsp;</strong>{$80501769 Move in
                        Date}<br></td>
                </tr>
                <tr>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                </tr>
                <tr>
                    <td colspan="3" style="width: 73.5805%;"><strong>Address</strong>: {$80501764 Address}<br></td>
                    <td style="width: 25.6083%;"><strong>Unit</strong>: {$80501765 Unit #}<br></td>
                </tr>
                <tr>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                </tr>
                <tr>
                    <td colspan="4" style="width: 99.3048%;"><strong>Landlord/Management Co</strong>: {$80501766
                        Landlord/Management Company}<br></td>
                </tr>
                <tr>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                </tr>
                <tr>
                    <td colspan="2" style="width: 49.1309%;"><strong>1st Month's Rent Amount:&nbsp;</strong>{$80501767 1st
                        Month's Rent Amount}<br></td>
                    <td colspan="2" style="width: 49.7103%;"><strong>TAS Commission</strong>: {$80501804 TAS Commission
                        %}<br></td>
                </tr>
                <tr>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                    <td><br></td>
                </tr>
                <tr>
                    <td><strong>Application Fees:&nbsp;</strong>{$80501952 Application Fees}<br></td>
                    <td><strong>At: {$80501960 }</strong></td>
                    <td colspan="2" style="width: 49.5944%;"><strong>Total: {$80501961 }</strong><br></td>
                </tr>
            </tbody>
        </table>
        <div class="pagebreak" style="page-break-before: always;"><br></div>
    </div>
    <div class="pagebreak" style="page-break-before: always;"><strong>Notes:&nbsp;</strong>{$80501975 Notes}</div>
    <div class="pagebreak" style="page-break-before: always;"><br></div>`;
    set(template) {
        this.tentant = template.tentant;
        return this.commission;
    }
}
