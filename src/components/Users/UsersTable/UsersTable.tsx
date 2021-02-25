import React, { FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import userApi from "../../../api/user";
import { User } from "../../../models/user";
import { UsersTableContainer } from "./styles";
import Loader from "../../common/Loader/Loader";
import { OverflowX } from "../../../styles/layout";
import { useHistory } from "react-router";

const cols = ["name", "email", "address"];

const UsersTable: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User[]>([]);

  const tableCols = useMemo(
    () => cols.map((col) => <th key={col}>{t(`users.table.${col}`)}</th>),
    [t]
  );

  const tableRows = useMemo(
    () =>
      data.map((record) => (
        <tr key={record.id} onClick={() => history.push(`/users/${record.id}`)}>
          <td>{record.name}</td>
          <td>{record.email}</td>
          <td>
            {record.address.street}, {record.address.suite},
            {record.address.city}
          </td>
        </tr>
      )),
    [data, history]
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await userApi.getUsers();
        setData(response.data);
      } catch (err) {
        toast.error(t("common.loadError"));
      }
      setLoading(false);
    })();
  }, [t]);

  return (
    <OverflowX>
      {loading ? (
        <Loader />
      ) : (
        <UsersTableContainer>
          <thead>
            <tr>{tableCols}</tr>
          </thead>

          <tbody>{tableRows}</tbody>
        </UsersTableContainer>
      )}
    </OverflowX>
  );
};

export default UsersTable;
